import { ApiProperty } from "@nestjs/swagger";

export class CreateEducationDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    degree: string;

    @ApiProperty()
    startDate: Date;

    @ApiProperty()
    endDate: Date

    @ApiProperty()
    isPresent: boolean
}
