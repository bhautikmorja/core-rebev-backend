import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SummeryModule } from './summery/summery.module';
import { ExperienceModule } from './experience/experience.module';
import { ProjectsModule } from './projects/projects.module';
import { StackModule } from './stack/stack.module';
import { EducationModule } from './education/education.module';
import { CertificationModule } from './certification/certification.module';
import { AchievementsModule } from './achievements/achievements.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, SummeryModule, ExperienceModule, ProjectsModule, StackModule, EducationModule, CertificationModule, AchievementsModule, SkillsModule],
})
export class AppModule {}
