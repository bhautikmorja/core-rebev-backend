import { Module } from '@nestjs/common';
import { CertificationService } from './certification.service';
import { CertificationController } from './certification.controller';
import { certificateProvider } from './certification.provider';

@Module({
  controllers: [CertificationController],
  providers: [CertificationService, ...certificateProvider],
})
export class CertificationModule {}
