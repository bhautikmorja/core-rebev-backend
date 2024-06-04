import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { Achievement } from './achievement.entity';

@Injectable()
export class AchievementsService {
  constructor(
    @Inject('ACHIEVEMENTS_REPOSITORY')
    private readonly achievementsRepository: typeof Achievement
  ) {}

  async createAchievement(CreateAchievementDto: CreateAchievementDto | any, userId: number) {
    try {
      const achievements = await this.achievementsRepository.create(
        { ...CreateAchievementDto, userId }
      )
      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: achievements,
      }
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }

  async getAllAchievements(userId: number) {
    try {
      const achievementsData = await this.achievementsRepository.findAll({
        where: { userId }
      })
      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: achievementsData,
      }
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }

  async updateAchievement(id: number, UpdateAchievementDto: UpdateAchievementDto) {
    try {
      await this.achievementsRepository.update(UpdateAchievementDto, {
        where: { id }
      })
      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: "updated",
      }
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }

  async deleteAchievement(id: number) {
    try {
      await this.achievementsRepository.destroy({
        where: { id }
      })
      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: "deleted",
      }
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }
}
