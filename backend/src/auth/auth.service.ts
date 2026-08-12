import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  async register(registerDto: RegisterDto) {
    const { name, email, password, role } = registerDto;

    // Check if email is already taken
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      // Stop execution and return HTTP 409 Conflicterror
      throw new ConflictException('An account with this email already exists');
    }

    // Hash password; second parameter is salt rounds, Number of times to scrample it
    const hashedPasword = await bcrypt.hash(password, 10);

    // Generate and hash the raw email verification token using SHA-256
    const rawVerificationToken = crypto.randomBytes(32).toString('hex');

    const hashedVerificationToken = crypto
      .createHash('sha256')
      .update(rawVerificationToken)
      .digest('hex');

    // Create user
    const newUser = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPasword,
        role,
        emailVerificationToken: hashedVerificationToken,
        isEmailVerified: false,
      },
    });

    // Notice we pass the RAW token, while the database keeps the hash.
    const url = this.configService.get<string>('FRONTEND_URL');

    const verificationUrl = `${url}/verify-email?token=${rawVerificationToken}`;
    console.log('----------------------------------------------------');
    console.log(`📧 MOCK EMAIL TO ${email}:`);
    console.log(`Click here to verify your account: ${verificationUrl}`);
    console.log('----------------------------------------------------');

    //This will be where we develop email servuces
    //await this.mailService.sendUserConfirmation(newUser.email, rawVerificationToken);

    // Issue auth tokens
    const tokens = await this.generateTokens(newUser.id, newUser.email);

    return {
      message:
        'User registered! Please check your email to verify your account.',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        ...tokens,
      },
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // Issue auth tokens
    const tokens = await this.generateTokens(user.id, user.email);

    return {
      message: 'User logged in successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        ...tokens,
      },
    };
  }

  async passwordReset(email: string) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    // Generate and hash the raw password reset token using SHA-256
    const rawResetToken = crypto.randomBytes(32).toString('hex');

    const hashedResetToken = crypto
      .createHash('sha256')
      .update(rawResetToken)
      .digest('hex');

    // Update user
    await this.prisma.user.update({
      where: {
        email,
      },
      data: {
        passwordResetToken: hashedResetToken,
      },
    });

    const url = this.configService.get<string>('FRONTEND_URL');

    const resetPasswordUrl = `${url}/reset-password?token=${rawResetToken}`;
    console.log('----------------------------------------------------');
    console.log(`📧 MOCK EMAIL TO ${email}:`);
    console.log(`Click here to reset your password: ${resetPasswordUrl}`);
    console.log('----------------------------------------------------');

    //This will be where we develop email servuces
    //await this.mailService.sendUserConfirmation(newUser.email, rawVerificationToken);
  }

  async verifyEmail(token: string) {
    const rawtoken = token;
    const incomingHashedToken = crypto.createHash('sha256').update(token).digest('hex');
    const user = await this.prisma.user.findFirst({
      where: {
        emailVerificationToken: incomingHashedToken,
      },
    });

    if (!user) {
      throw new Error('Invalid token');
    }

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        emailVerified: true,
        emailVerificationToken: null,
      },
    });
  }
}
