import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Headers } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { verifyToken } from 'src/utils/general_helper';


@ApiTags('User')
@Controller('api/user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @ApiBearerAuth()
  @Get('')
  async getUserById(@Res() res: Response, @Headers() headers: Record<string, string>) {
    if(!headers.authorization){
      return res.status(400).json('Please send a valid token or you dont have the necessary privilege to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.usersService.getUserById(+userId);

    return res.status(response.statusCode).json(response.data);
  }


  @ApiBearerAuth()
  @Delete('')
  async deleteUser(@Res() res: Response, @Headers() headers: Record<string, string>) {
    if(!headers.authorization){
      return res.status(400).json('Please send a valid token or you dont have the necessary privilege to view this page')
    }
    const userId = verifyToken(headers.authorization.split(' ')[1])
    const response = await this.usersService.deleteUser(+userId);
    return res.status(response.statusCode).json(response.data);
  }
}
