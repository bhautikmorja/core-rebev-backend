import { Module } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { AchievementsController } from './achievements.controller';
import { achievementsProvider } from './achievements.provider';

@Module({
  controllers: [AchievementsController],
  providers: [AchievementsService, ...achievementsProvider],
})
export class AchievementsModule {}
