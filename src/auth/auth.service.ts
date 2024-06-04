import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/user.entity';
import { createToken } from 'src/utils/general_helper';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) { }

  async register(CreateUserDto: CreateUserDto | any) {
    try {
      const newUser = await this.userRepository.create(CreateUserDto)
      const token = createToken(newUser.id);

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: { data: newUser, token },
      }
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      }
    }
  }
}
