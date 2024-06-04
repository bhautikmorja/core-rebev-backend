import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";


export class updateSkillDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    name: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    rate: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    type:string;
}
