import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { ExperienceController } from './experience.controller';
import { experienceProvider } from './experience.provider';

@Module({
  controllers: [ExperienceController],
  providers: [ExperienceService,...experienceProvider],
})
export class ExperienceModule {}
