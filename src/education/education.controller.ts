import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Headers, Put } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { verifyToken } from 'src/utils/general_helper';
import { Response } from 'express';

@ApiTags('Education')
@Controller('api/education')
export class EducationController {
  constructor(private readonly educationService: EducationService) { }

  @ApiBearerAuth()
  @Post()
  async createEducation(@Res() res: Response, @Body() createEducationDto: CreateEducationDto, @Headers() headers: Record<string, string>) {
    if (!headers.authorization) {
      return res.status(400).json('Please send a valid token or you dont have the necessary privilige to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.educationService.createEducation(createEducationDto, +userId)

    return res.status(response.statusCode).json(response.data)

  }

  @ApiBearerAuth()
  @Get()
  async getAllEducation(@Res() res: Response, @Headers() headers: Record<string, string>) {
    if (!headers.authorization) {
      return res.status(400).json('Please send a valid token or you dont have the necessary privilige to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.educationService.getAllEducation(+userId)

    return res.status(response.statusCode).json(response.data)
  }



  @Put(':id')
  async updateEducation(@Res() res: Response, @Param('id') id: number, @Body() updateEducationDto: UpdateEducationDto) {
    const response = await this.educationService.updateEducation(+id, updateEducationDto);

    return res.status(response.statusCode).json(response.data)
  }

  @Delete(':id')
  async deleteEducation(@Res() res: Response, @Param('id') id: number) {
    const response = await this.educationService.deleteEducation(+id);

    return res.status(response.statusCode).json(response.data)
  }
}