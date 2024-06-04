import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProvider } from './users.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...userProvider],
})
export class UsersModule {}
