import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateStackDto } from './dto/create-stack.dto';
import { Stack } from './stack.entity';

@Injectable()
export class StackService {
  constructor(
    @Inject('STACK_REPOSITORY')
    private stackRepository:typeof Stack){}
  async createStack(createStackDto: CreateStackDto, projectId:number) {
    try{

      await this.stackRepository.destroy({where:{projectId}})

      for(let i=0;i<createStackDto.stack.length;i++){
        const data = await this.stackRepository.create({name:createStackDto.stack[i],projectId})
      }

      const findAll = await this.stackRepository.findAll({where:{projectId}})
        return {
            status: true,
            statusCode: HttpStatus.OK,
            data: findAll,
          }
    }catch(err){
        return {
            status: false,
            statusCode: HttpStatus.BAD_REQUEST,
            data: err.message,
          }
    }
  }

  async deleteStack(id: number) {
    try{
      await this.stackRepository.destroy({where:{id}})
        return {
            status: true,
            statusCode: HttpStatus.OK,
            data: "Deleted",
          }
    }catch(err){
        return {
            status: false,
            statusCode: HttpStatus.BAD_REQUEST,
            data: err.message,
          }
    }
  }
}
