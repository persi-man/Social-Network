import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/models/user/user';
import { UserService } from 'src/services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() user: User): User {
    return this.userService.create(user);
  }
}
