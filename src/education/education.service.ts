import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './education.entity';

@Injectable()


export class EducationService {  
  constructor(
    @Inject('EDUCATION_REPOSITORY')
    private readonly educationRepository: typeof Education
  ){}

   async createEducation(createEducationDto: CreateEducationDto | any, userId:number) {
    try{
      const education = await this.educationRepository.create(
        {...createEducationDto,userId}
      )
        return {
            status: true,
            statusCode: HttpStatus.OK,
            data: education,
          }
    }catch(err){
        return {
            status: false,
            statusCode: HttpStatus.BAD_REQUEST,
            data: err.message,
          }
    }
  }

  async getAllEducation(userId:number) {
    try{
      const educationData = await this.educationRepository.findAll({
        where: { userId }
      })
        return {
            status: true,
            statusCode: HttpStatus.OK,
            data: educationData,
          }
    }catch(err){
        return {
            status: false,
            statusCode: HttpStatus.BAD_REQUEST,
            data: err.message,
          }
    }
  }

  async updateEducation(id: number, updateEducationDto: UpdateEducationDto) {
    try{
      await this.educationRepository.update(updateEducationDto, {
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

  async deleteEducation(id: number) {
    try{
      await this.educationRepository.destroy( {
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
