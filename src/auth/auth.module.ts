// src/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { RegisterUserUseCase } from './application/use-cases/register-user.use-case';
import { PrismaService } from './infrastructure/prisma/prisma.service';
import { UserRepository } from './domain/interfaces/user.repository';
import { PrismaUserRepository } from './infrastructure/repositories/prisma-user.repository';
import { AuthController } from './presentation/controllers/auth.controller';

@Module({
  controllers: [AuthController],
  providers: [
    PrismaService,
    RegisterUserUseCase,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class AuthModule {}
