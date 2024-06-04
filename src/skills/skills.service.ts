import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { Skill } from './skill.entity';

@Injectable()
export class SkillsService {
  constructor(
    @Inject('SKILLS_REPOSITORY')
    private skillsRepository: typeof Skill) { }

  async createSkills(CreateSkillDto: CreateSkillDto | any, userId: number) {
    try {
      const createSkill = await this.skillsRepository.create({ ...CreateSkillDto, userId })
      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: createSkill,
      }
    } catch (err) {
      return {
        status: false,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }

  async updateSkills(CreateSkillDto: CreateSkillDto | any, id: number) {
    try {
      await this.skillsRepository.update(CreateSkillDto, {
        where: { id }
      })
     

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: "Updated !",
      }
    } catch (err) {
      return {
        status: false,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }


  async deleteSkills(id: number) {
    try {
      await this.skillsRepository.destroy({ where: { id } })
      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: "Deleted",
      }
    } catch (err) {
      return {
        status: false,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }
}
