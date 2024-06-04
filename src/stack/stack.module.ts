import { Module } from '@nestjs/common';
import { StackService } from './stack.service';
import { StackController } from './stack.controller';
import { stackProvider } from './stack.provider';

@Module({
  controllers: [StackController],
  providers: [StackService,...stackProvider],
})
export class StackModule {}
