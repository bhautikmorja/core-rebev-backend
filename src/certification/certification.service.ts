import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';
import { Certification } from './certification.entity';

@Injectable()
export class CertificationService {
  constructor(
    @Inject('CERTIFICATE_REPOSITORY')
    private readonly certificationRepository: typeof Certification
  ) {}

  async createCertification(createCertificationDto: CreateCertificationDto | any, userId: number) {
    try {
      const certificates = await this.certificationRepository.create(
        { ...createCertificationDto, userId }
      )
      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: certificates,
      }
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }

  async getAllCertification(userId: number) {
    try {
      const certificationsData = await this.certificationRepository.findAll({
        where: { userId }
      })
      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: certificationsData,
      }
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }

  async updateCertification(id: number, UpdateCertificationDto: UpdateCertificationDto) {
    try {
      await this.certificationRepository.update(UpdateCertificationDto, {
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

  async deleteCertification(id: number) {
    try {
      await this.certificationRepository.destroy({
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
