import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user/user';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  create(user: User): User {
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }
}

