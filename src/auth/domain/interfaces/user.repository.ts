// src/auth/domain/interfaces/user.repository.ts

import { User, UserType, AccountStatus } from '@prisma/client';

export interface CreateUserInput {
  type: UserType;
  names: string;
  father_lastname: string;
  mother_lastname: string;
  email: string;
  password: string;
  username: string;
  birth_date: Date;
  phone: string;
  profile_picture?: string;
  account_status?: AccountStatus;
}

export abstract class UserRepository {
  abstract create(data: CreateUserInput): Promise<User>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findByUsername(username: string): Promise<User | null>;
}
