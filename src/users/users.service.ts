import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)private readonly userService: Repository<User>){}// learn
  create(createUserDto: CreateUserDto) {
    return this.userService.save(createUserDto)
  }

  findAll() {
    return  this.userService.find()
  }

  findOne(id: number) {
    return this.userService.findOne({where: {id}})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userService.preload({ id, ...updateUserDto })// learn
    if(!user){
      throw new NotFoundException("bunday idlik user yoq")
    }
    return this.userService.save(user)
  }

  async remove(id: number) {
   await this.userService.delete({id})
   return id 
  }
}
