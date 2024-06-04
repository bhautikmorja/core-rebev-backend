import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Headers } from '@nestjs/common';
import { SummeryService } from './summery.service';
import { CreateSummeryDto } from './dto/create-summery.dto';
import { Response } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { verifyToken } from 'src/utils/general_helper';

@ApiTags('Summery')
@Controller('api/summery')

export class SummeryController {
  constructor(private readonly summeryService: SummeryService) { }

  @ApiBearerAuth()
  @Post()
  async createSummery(@Res() res: Response, @Body() createSummeryDto: CreateSummeryDto, @Headers() headers: Record<string, string>) {
    if (!headers.authorization) {
      return res.status(400).json('Please send a valid token or you dont have the necessary privilege to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.summeryService.createSummery(createSummeryDto, +userId);
    return res.status(response.statusCode).json(response.data)
  }

  @ApiBearerAuth()
  @Get()
  async findSummery(@Res() res: Response, @Headers() headers: Record<string, string>) {
    if (!headers.authorization) {
      return res.status(400).json('Please send a valid token or you dont have the necessary privilege to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.summeryService.findSummery(userId);

    return res.status(response.statusCode).json(response.data)
  }

  @ApiBearerAuth()
  @Delete()
  async deleteSummery(@Res() res: Response, @Headers() headers: Record<string, string>) {
    if (!headers.authorization) {
      return res.status(400).json('Please send a valid token or you dont have the necessary privilege to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.summeryService.deleteSummery(+userId);

    return res.status(response.statusCode).json(response.data)
  }
}
