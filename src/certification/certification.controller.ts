import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Res, Put } from '@nestjs/common';
import { CertificationService } from './certification.service';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { verifyToken } from 'src/utils/general_helper';
import { Response } from 'express';

@ApiTags('Certification')
@Controller('api/certification')
export class CertificationController {
  constructor(private readonly certificationService: CertificationService) {}

  @ApiBearerAuth()
  @Post()
  async createCertification(@Res() res: Response, @Body() createCertificationDto: CreateCertificationDto, @Headers() headers: Record<string, string>) {
    if (!headers.authorization) {
      return res.status(400).json('Please send a valid token or you dont have the necessary privilige to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.certificationService.createCertification(createCertificationDto, +userId)

    return res.status(response.statusCode).json(response.data)

  }

  @ApiBearerAuth()
  @Get()
  async getAllCertification(@Res() res: Response, @Headers() headers: Record<string, string>) {
    if (!headers.authorization) {
      return res.status(400).json('Please send a valid token or you dont have the necessary privilige to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.certificationService.getAllCertification(+userId)

    return res.status(response.statusCode).json(response.data)
  }



  @Put(':id')
  async updateCertification(@Res() res: Response, @Param('id') id: number, @Body() updateCertificationDto: UpdateCertificationDto) {
    const response = await this.certificationService.updateCertification(+id, updateCertificationDto);

    return res.status(response.statusCode).json(response.data)
  }

  @Delete(':id')
  async deleteCertification(@Res() res: Response, @Param('id') id: number) {
    const response = await this.certificationService.deleteCertification(+id);

    return res.status(response.statusCode).json(response.data)
  }
}
