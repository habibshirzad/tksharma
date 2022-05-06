import { getEntityManagerToken } from "@nestjs/typeorm";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserDto{

    id: number

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string;



    @IsString()
    @IsEmail()
    @IsNotEmpty()
    username: string;
}