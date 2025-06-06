// src/auth/application/dtos/register-user.dto.ts

import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length, Matches } from 'class-validator';
import { UserType } from '@prisma/client';

export class RegisterUserDto {
  @IsEnum(UserType)
  type: UserType;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  names: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  father_lastname: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  mother_lastname: string;

  @IsEmail()
  @Length(1, 150)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 100)
  password: string;

  @IsString()
  @IsNotEmpty()
  @Length(4, 50)
  username: string;

  @IsDateString()
  birth_date: string;

  @IsString()
  @Matches(/^\d{10}$/, { message: 'El número de teléfono debe tener 10 dígitos.' })
  phone: string;

  @IsOptional()
  @IsString()
  profile_picture?: string;
}
