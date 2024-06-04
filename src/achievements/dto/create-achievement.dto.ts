import { ApiProperty } from "@nestjs/swagger";

export class CreateAchievementDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    link: string;

    @ApiProperty()
    description: string
}
