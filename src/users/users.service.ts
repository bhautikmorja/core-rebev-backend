import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject("USER_REPOSITORY")
    private userRepository: typeof User,
  ) { }


  async getUserById(id: number) {
    try {
      const userData = await this.userRepository.findOne({
        where: { id }
      })
      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: userData,
      }
    } catch (err) {
      return {
        status: false,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }



  async deleteUser(id: number) {
    try {
     await this.userRepository.destroy({
        where: { id }
      })
      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: "User deleted successfully !",
      }
    } catch (err) {
      return {
        status: false,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }
}
