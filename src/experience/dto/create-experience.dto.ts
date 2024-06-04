import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Validate } from "class-validator";
import { UserExistsRule } from "src/validate";

export class CreateExperienceDto {
    @ApiProperty()
    title:string;

    @ApiProperty()
    name:string;

    @ApiProperty()
    website:string;

    @ApiProperty()
    startDate:Date

    @ApiProperty()
    endDate:Date

    @ApiProperty()
    isPresent:boolean

    @ApiProperty()
    responsibilities:string
}
