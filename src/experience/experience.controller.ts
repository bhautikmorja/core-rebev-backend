import { Controller, Get, Post, Body, Put, Param, Delete, Res, Headers } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { verifyToken } from 'src/utils/general_helper';


@ApiTags('Experience')
@Controller('api/experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

@ApiBearerAuth()
  @Post()
  async createExperience(@Res() res:Response, @Body() createExperienceDto: CreateExperienceDto,@Headers() headers: Record<string, string>) {
    if(!headers.authorization){
      return res.status(400).json('Please send a valid token or you dont have the necessary privilige to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.experienceService.createExperience(createExperienceDto,+userId)

    return res.status(response.statusCode).json(response.data)

  }

  @ApiBearerAuth()
  @Get()
  async getAllExperience(@Res() res:Response,@Headers() headers: Record<string, string>) {
    if(!headers.authorization){
      return res.status(400).json('Please send a valid token or you dont have the necessary privilige to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.experienceService.getAllExperience(+userId)

    return res.status(response.statusCode).json(response.data)
  }



  @Put(':id')
  async updateExperience(@Res() res:Response, @Param('id') id: number, @Body() updateExperienceDto: UpdateExperienceDto) {
    const response =  await this.experienceService.updateExperience(+id, updateExperienceDto);

    return res.status(response.statusCode).json(response.data)
  }

  @Delete(':id')
  async deleteExperience(@Res() res:Response,@Param('id') id: number) {
    const response =  await this.experienceService.deleteExperience(+id);

    return res.status(response.statusCode).json(response.data)
  }
}
