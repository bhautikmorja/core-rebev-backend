import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateEducationDto {
    @ApiProperty()
    @IsOptional()
    name: string;

    @ApiProperty()
    @IsOptional()
    degree: string;

    @ApiProperty()
    @IsOptional()
    startDate: Date;

    @ApiProperty()
    @IsOptional()
    endDate: Date

    @ApiProperty()
    @IsOptional()
    isPresent: boolean
}
