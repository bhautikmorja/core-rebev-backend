import { Module } from '@nestjs/common';
import { ProjectService } from './projects.service';
import { ProjectController } from './projects.controller';
import { projectProvider } from './project.provider';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService,...projectProvider],
})
export class ProjectsModule {}
