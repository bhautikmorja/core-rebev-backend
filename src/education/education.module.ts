import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { educationProvider } from './education.provider';

@Module({
  controllers: [EducationController],
  providers: [EducationService, ...educationProvider],
})
export class EducationModule {}
