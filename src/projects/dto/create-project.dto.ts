import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectDto {
    @ApiProperty()
    title:string

    @ApiProperty()
    description:string

    @ApiProperty()
    features:string

    @ApiProperty()
    level:number

    @ApiProperty()
    gitHubLink:string

    @ApiProperty()
    deployedLink:string

    @ApiProperty()
    otherLink:string

    @ApiProperty()
    teamSize:number

    @ApiProperty()
    startDate:Date

    @ApiProperty()
    endDate:Date

    @ApiProperty()
    isPresent:Boolean
    
}
