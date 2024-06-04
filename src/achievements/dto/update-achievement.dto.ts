import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateAchievementDto {
    @ApiProperty()
    @IsOptional()
    title: string;

    @ApiProperty()
    @IsOptional()
    name: string;

    @ApiProperty()
    @IsOptional()
    link: string;

    @ApiProperty()
    @IsOptional()
    description: string
}
