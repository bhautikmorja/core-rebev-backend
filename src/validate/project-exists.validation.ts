import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Project } from 'src/projects/project.entity';

@ValidatorConstraint({ name: 'ProjectExists', async: true })
@Injectable()
export class ProjectExistsRule implements ValidatorConstraintInterface {
  async validate(id: number) {
    try {
      const project = await Project.findByPk(id);

      if (project) return true;
      return false;
    } catch (e) {
      console.log('error', e.message);
      return false;
    }
  }

  defaultMessage() {
    return `Project doesn't exist`;
  }
}
