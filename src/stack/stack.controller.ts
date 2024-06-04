import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { StackService } from './stack.service';
import { CreateStackDto } from './dto/create-stack.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import {Response, response} from 'express'

@ApiTags('Stacks')
@Controller('api/stack')
export class StackController {
  constructor(private readonly stackService: StackService) {}
  
  @Post(':id')
  @ApiParam({name:'id',required:true,type:'number'})
  async createStack(@Res() res:Response,@Body() createStackDto: CreateStackDto, @Param('id') id:number) {
    const response = await this.stackService.createStack(createStackDto,id)

    return res.status(response.statusCode).json(response.data)

  }
  

  @Delete(':id')
  async deleteStack(@Res() res:Response,@Param('id') id: number) {
    const response = await this.stackService.deleteStack(id)

    return res.status(response.statusCode).json(response.data) 
  }
}
