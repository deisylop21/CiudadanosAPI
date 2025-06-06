// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';  // <-- importa AuthModule

@Module({
  imports: [AuthModule],  // <-- agrégalo aquí
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
