import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateSummeryDto } from './dto/create-summery.dto';
import { Summery } from './summery.entity';

@Injectable()
export class SummeryService {
  constructor(
    @Inject("SUMMERY_REPOSITORY")
    private summeryRepository: typeof Summery,
  ) { }

  async createSummery(createSummeryDto: CreateSummeryDto | any, userId: number) {

    try {
      const existUser = await this.summeryRepository.findOne({
        where: { userId }
      })

      if (existUser) {
        await this.summeryRepository.update(createSummeryDto, {
          where: { userId }
        })

        return {
          status: true,
          statusCode: HttpStatus.CREATED,
          data: "Summery updated",
        }
      }

      await this.summeryRepository.create({ ...createSummeryDto, userId })

      return {
        status: true,
        statusCode: HttpStatus.CREATED,
        data: "Summery added",
      }



    } catch (err) {
      return {
        status: false,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }

  async findSummery(userId: number) {

    try {
      const summeryData = await this.summeryRepository.findOne({
        where: { userId }
      })
      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: summeryData,
      }
    } catch (err) {
      return {
        status: false,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }


 async deleteSummery(userId: number) {
    try{
       await this.summeryRepository.destroy({
        where: { userId }
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
