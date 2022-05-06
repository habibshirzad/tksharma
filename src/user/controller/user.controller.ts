import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}


    @Get()
    getUsers(){
        return this.userService.getUsers()
    }

    @Get('id')
    getUser(@Param('id')  id:number){
        return this.userService.getUser(id)
    }

    // @Get(':id')
    // findOne(@Param('id')  id:number){
    //     return this.userService.findOne(Number(id))    
    // }

    @Post()
    @UsePipes(new ValidationPipe())
    postUser(@Body() createUserDto:UserDto){
        return this.userService.addUser(createUserDto)
    }

    @Delete()
    deleteUser(@Param('email') param:UserDto){
        return this.userService.deleteUser(param.email);
    }
}
