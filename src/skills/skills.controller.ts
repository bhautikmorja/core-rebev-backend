import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Headers, Put } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { verifyToken } from 'src/utils/general_helper';
import { updateSkillDto } from './dto/update-skill.dto';

@ApiTags('Skills')
@Controller('api/skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) { }

  @Post()
  @ApiBearerAuth()
  async createSkills(@Res() res: Response, @Body() CreateSkillDto: CreateSkillDto, @Headers() headers: Record<string, string>) {
    if (!headers.authorization) {
      return res.status(400).json('Please send a valid token or you dont have the necessary privilege to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.skillsService.createSkills(CreateSkillDto, userId)

    return res.status(response.statusCode).json(response.data)

  }

  @Put(':id')
  async updateSkills(@Res() res:Response, @Param('id') id: number, @Body() updateSkillDto: updateSkillDto) {
    const response =  await this.skillsService.updateSkills(updateSkillDto, id);

    return res.status(response.statusCode).json(response.data)
  }

  @Delete(':id')
  async deleteSkills(@Res() res: Response, @Param('id') id: number) {
    const response = await this.skillsService.deleteSkills(id)

    return res.status(response.statusCode).json(response.data)
  }
}
