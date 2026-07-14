// src/auth/dto/register.dto.ts
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from '../../../generated/prisma/client';

export class RegisterDto {
  @IsString({ message: 'Name must be a text string.' })
  @IsNotEmpty({ message: 'Name cannot be empty.' })
  @MinLength(2, { message: 'Name must be at least 2 characters long.' })
  name: string;

  @IsEmail({}, { message: 'Please provide a valid email address.' })
  @IsNotEmpty({ message: 'Email is required.' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  password: string;

  @IsEnum(Role, {
    message: 'Role must be a valid account type (e.g., MENTOR or MENTEE).',
  })
  role: Role;
}
