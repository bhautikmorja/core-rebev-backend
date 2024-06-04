import { ApiProperty } from "@nestjs/swagger";

export class CreateCertificationDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    link: string;

    @ApiProperty()
    organization: string;

    @ApiProperty()
    description: string
}
