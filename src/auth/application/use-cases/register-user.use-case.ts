// src/auth/application/use-cases/register-user.use-case.ts

import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { UserRepository } from '../../domain/interfaces/user.repository';
import * as bcrypt from 'bcryptjs';
import { AccountStatus } from '@prisma/client';

@Injectable()
export class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(dto: RegisterUserDto): Promise<void> {
    // Verificar si ya existe usuario con el mismo email o username
    const existingByEmail = await this.userRepository.findByEmail(dto.email);
    if (existingByEmail) {
      throw new Error('El correo ya está registrado.');
    }

    const existingByUsername = await this.userRepository.findByUsername(dto.username);
    if (existingByUsername) {
      throw new Error('El nombre de usuario ya está en uso.');
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    // Preparar datos para guardar
    const userToCreate = {
      ...dto,
      password: hashedPassword,
      birth_date: new Date(dto.birth_date),
      account_status: AccountStatus.Pendiente,
    };

    // Guardar usuario
    await this.userRepository.create(userToCreate);
  }
}
