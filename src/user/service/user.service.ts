import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import { UserDto } from '../dto/user.dto';
import { User } from '../dto/entity/user.entity';

@Injectable()
export class UserService {
  find() {
    throw new Error('Method not implemented.');
  }
    constructor(@InjectRepository(User) private  userRepository: Repository<User>){}


    getUsers(){
        return this.userRepository.find()
    }

     async getUser(id:number){
        return  await this.userRepository.findOne({id})
        
    }

    async addUser(createUserDto:UserDto){
        const newUser = this.userRepository.create(createUserDto)
        return await this.userRepository.save(newUser)
    }

    deleteUser(email:string){
        return this.userRepository.delete(email)
    }

}
