import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Validate } from "class-validator";
import { UserExistsRule } from "src/validate";

export class CreateSummeryDto {
    @ApiProperty()
    @IsNotEmpty()
    description: string;
}
