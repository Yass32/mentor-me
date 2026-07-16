import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { ConfigService } from '@nestjs/config';
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
      throw new ConflictException('Email already exists');
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

    //await this.mailService.sendUserConfirmation(newUser.email, rawVerificationToken);

    return {
      message:
        'User registered! Please check your email to verify your account.',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    };
  }
}
