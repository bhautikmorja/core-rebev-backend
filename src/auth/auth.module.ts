import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { userProvider } from 'src/users/users.provider';

@Module({
  controllers: [AuthController],
  providers: [AuthService, ...userProvider],
})
export class AuthModule {}
