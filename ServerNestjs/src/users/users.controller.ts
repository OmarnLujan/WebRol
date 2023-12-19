import { Body, Controller, Get, Post } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UsersService } from './users.service';

import { CreateUserDto } from '../dto/create-user.dto';

import { User } from '../interfaces/user/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.UsersService.create(createUserDto);
  }
  @Get()
  async findAll(): Promise<User[]> {
    return this.UsersService.findAll();
  }
}
