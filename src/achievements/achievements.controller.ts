import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Headers, Put } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { verifyToken } from 'src/utils/general_helper';

@ApiTags("Achievements")
@Controller('api/achievements')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @ApiBearerAuth()
  @Post()
  async createAchievement(@Res() res: Response, @Body() CreateAchievementDto: CreateAchievementDto, @Headers() headers: Record<string, string>) {
    if (!headers.authorization) {
      return res.status(400).json('Please send a valid token or you dont have the necessary privilige to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.achievementsService.createAchievement(CreateAchievementDto, +userId)

    return res.status(response.statusCode).json(response.data)

  }

  @ApiBearerAuth()
  @Get()
  async getAllAchievements(@Res() res: Response, @Headers() headers: Record<string, string>) {
    if (!headers.authorization) {
      return res.status(400).json('Please send a valid token or you dont have the necessary privilige to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.achievementsService.getAllAchievements(+userId)

    return res.status(response.statusCode).json(response.data)
  }



  @Put(':id')
  async updateAchievement(@Res() res: Response, @Param('id') id: number, @Body() UpdateAchievementDto: UpdateAchievementDto) {
    const response = await this.achievementsService.updateAchievement(+id, UpdateAchievementDto);

    return res.status(response.statusCode).json(response.data)
  }

  @Delete(':id')
  async deleteAchievement(@Res() res: Response, @Param('id') id: number) {
    const response = await this.achievementsService.deleteAchievement(+id);

    return res.status(response.statusCode).json(response.data)
  }
}
