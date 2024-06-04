import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, Validate } from "class-validator";
import { UserExistsRule } from "src/validate";

export class UpdateExperienceDto {
    @ApiProperty()
    @IsOptional()
    title:string;

    @ApiProperty()
    @IsOptional()
    name:string;

    @ApiProperty()
    @IsOptional()
    website:string;

    @ApiProperty()
    @IsOptional()
    startDate:Date

    @ApiProperty()
    @IsOptional()
    endDate:Date

    @ApiProperty()
    @IsOptional()
    isPresent:boolean

    @ApiProperty()
    @IsOptional()
    responsibilities:string

}
