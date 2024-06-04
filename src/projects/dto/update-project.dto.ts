import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class UpdateProjectDto {
    @ApiProperty()
    @IsOptional()
    title: string

    @ApiProperty()
    @IsOptional()
    description: string

    @ApiProperty()
    @IsOptional()
    features: string

    @ApiProperty()
    @IsOptional()
    level: number

    @ApiProperty()
    @IsOptional()
    gitHubLink: string

    @ApiProperty()
    @IsOptional()
    deployedLink: string

    @ApiProperty()
    @IsOptional()
    otherLink: string

    @ApiProperty()
    @IsOptional()
    teamSize: number

    @ApiProperty()
    @IsOptional()
    startDate: Date

    @ApiProperty()
    @IsOptional()
    endDate: Date

    @ApiProperty()
    @IsOptional()
    isPresent: Boolean

}
