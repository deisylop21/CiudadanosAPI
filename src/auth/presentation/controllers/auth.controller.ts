import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDto } from '../../application/dtos/register-user.dto';
import { RegisterUserUseCase } from '../../application/use-cases/register-user.use-case';

@Controller('auth')
export class AuthController {
  constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}

  @Post('register')
  async register(@Body() dto: RegisterUserDto): Promise<{ message: string }> {
    console.log('DTO recibido:', dto);  // <-- Agrega esta línea
    await this.registerUserUseCase.execute(dto);
    return { message: 'Usuario registrado exitosamente' };
  }
}
