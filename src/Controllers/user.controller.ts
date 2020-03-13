import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../Services/user.service';
import { User } from 'src/Entity/user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get('/users')
  list(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/rota-teste')
  getTeste() {
    return { 
      msg: 'Hello World'
    }
  }
}
