import { Controller, Get, Post, Body, Put, Param, Delete, Res, Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { verifyToken } from 'src/utils/general_helper';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectService } from './projects.service';


@ApiTags('Project')
@Controller('api/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

@ApiBearerAuth()
  @Post()
  async createProject(@Res() res:Response, @Body() createProjectDto: CreateProjectDto,@Headers() headers: Record<string, string>) {
    if(!headers.authorization){
      return res.status(400).json('Please send a valid token or you dont have the necessary privilige to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.projectService.createProject(createProjectDto,+userId)

    return res.status(response.statusCode).json(response.data)

  }

  @ApiBearerAuth()
  @Get()
  async getAllProject(@Res() res:Response,@Headers() headers: Record<string, string>) {
    if(!headers.authorization){
      return res.status(400).json('Please send a valid token or you dont have the necessary privilige to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.projectService.getAllProject(+userId)

    return res.status(response.statusCode).json(response.data)
  }



  @Put(':id')
  async updateProject(@Res() res:Response, @Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto) {
    const response =  await this.projectService.updateProject(+id, updateProjectDto);

    return res.status(response.statusCode).json(response.data)
  }

  @Delete(':id')
  async deleteProject(@Res() res:Response,@Param('id') id: number) {
    const response =  await this.projectService.deleteProject(+id);

    return res.status(response.statusCode).json(response.data)
  }
}
