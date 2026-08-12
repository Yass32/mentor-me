import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Throttle } from '@nestjs/throttler';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    // Zero validation if-statements needed safely pass registerDto straight to our AuthService and Prisma database.
    return this.authService.register(registerDto);
  }

  // 👈 Override! Limit this specific endpoint to ONLY 5 attempts every 60 seconds (60000ms)
  // If a user (or hacker) hits this route 6 times in one minute,
  // NestJS automatically intercepts the request and returns: HTTP 429 Too Many Requests
  @Throttle({ medium: { limit: 5, ttl: 60000 } })
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    // Zero validation if-statements needed!
    // We can safely pass loginDto straight to our AuthService and Prisma database.
    return this.authService.login(loginDto);
  }

  // 👈 Even stricter! Only allow 2 password reset requests per hour (3,600,000ms)
  @Throttle({ medium: { limit: 2, ttl: 3600000 } })
  @Post('forgot-password')
  async forgotPassword(@Body() body: {email: string}) {
    return this.authService.forgotPassword(body.email);
  }
}
