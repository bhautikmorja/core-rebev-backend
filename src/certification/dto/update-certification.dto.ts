import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateCertificationDto {
    @ApiProperty()
    @IsOptional()
    name: string;

    @ApiProperty()
    @IsOptional()
    link: string;

    @ApiProperty()
    @IsOptional()
    organization: string;

    @ApiProperty()
    @IsOptional()
    description: string
}
