import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience } from './experience.entity';

@Injectable()
export class ExperienceService {
  constructor(
    @Inject('EXPERIENCE_REPOSITORY')
    private readonly experienceRepository: typeof Experience
  ){}


  async createExperience(createExperienceDto: CreateExperienceDto | any, userId:number) {
    try{
      const experience = await this.experienceRepository.create(
        {...createExperienceDto,userId}
      )
        return {
            status: true,
            statusCode: HttpStatus.OK,
            data: experience,
          }
    }catch(err){
        return {
            status: false,
            statusCode: HttpStatus.BAD_REQUEST,
            data: err.message,
          }
    }
  }

  async getAllExperience(userId:number) {
    try{
      const experienceData = await this.experienceRepository.findAll({
        where: { userId }
      })
        return {
            status: true,
            statusCode: HttpStatus.OK,
            data: experienceData,
          }
    }catch(err){
        return {
            status: false,
            statusCode: HttpStatus.BAD_REQUEST,
            data: err.message,
          }
    }
  }

  async updateExperience(id: number, updateExperienceDto: UpdateExperienceDto) {
    try{
      await this.experienceRepository.update(updateExperienceDto, {
        where: { id }
      })  
        return {
            status: true,
            statusCode: HttpStatus.OK,
            data: "updated",
          }
    }catch(err){
        return {
            status: false,
            statusCode: HttpStatus.BAD_REQUEST,
            data: err.message,
          }
    }
  }

  async deleteExperience(id: number) {
    try{
      await this.experienceRepository.destroy( {
        where: { id }
      })  
        return {
            status: true,
            statusCode: HttpStatus.OK,
            data: "deleted",
          }
    }catch(err){
        return {
            status: false,
            statusCode: HttpStatus.BAD_REQUEST,
            data: err.message,
          }
    }
  }
}
