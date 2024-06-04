import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateStackDto {
    @ApiProperty()
    @IsNotEmpty()
    stack:string[];
}
