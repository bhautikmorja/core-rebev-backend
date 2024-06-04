import { Module } from '@nestjs/common';
import { SummeryService } from './summery.service';
import { SummeryController } from './summery.controller';
import { summeryProvider } from './summery.provider';

@Module({
  controllers: [SummeryController],
  providers: [SummeryService, ...summeryProvider],
})
export class SummeryModule {}
