import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';


@Injectable()
export class ProjectService {
  constructor(
    @Inject('PROJECT_REPOSITORY')
    private readonly projectRepository: typeof Project
  ){}


  async createProject(creteProjectDto: CreateProjectDto | any, userId:number) {
    try{
      const project = await this.projectRepository.create(
        {...creteProjectDto,userId}
      )
        return {
            status: true,
            statusCode: HttpStatus.OK,
            data: project,
          }
    }catch(err){
        return {
            status: false,
            statusCode: HttpStatus.BAD_REQUEST,
            data: err.message,
          }
    }
  }

  async getAllProject(userId:number) {
    try{
      const projectData = await this.projectRepository.findAll({
        where: { userId },include:[
          {association: "stacks"}
        ]
      })
        return {
            status: true,
            statusCode: HttpStatus.OK,
            data: projectData,
          }
    }catch(err){
        return {
            status: false,
            statusCode: HttpStatus.BAD_REQUEST,
            data: err.message,
          }
    }
  }

  async updateProject(id: number, updateProjectDto: UpdateProjectDto) {
    try{
      await this.projectRepository.update(updateProjectDto, {
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

  async deleteProject(id: number) {
    try{
      await this.projectRepository.destroy( {
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
