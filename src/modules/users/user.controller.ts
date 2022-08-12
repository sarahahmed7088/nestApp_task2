import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post,Put } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    constructor(private readonly userService:UserService){}
    @Get()
    getAll()
    {
        return this.userService.getAll();
    }
    @Get(':userId')
    getById(
        @Param('userId',ParseIntPipe)userId:number
        )
    {
        return this.userService.getById(userId)
    }
    @Post()
    addOne(
        @Body() user:any
    )
    {
        return this.userService.addOne(user)
    }
    @Delete(':userId')
    deleteOne(
        @Param('userId',ParseIntPipe)userId:number
    )
    {
        return this.userService.deleteOne(userId)
    }
    @Put(':userId')
    updateUser(
        @Param('userId',ParseIntPipe)userId:number,
        @Body()userName:any
    )
    {
        return this.userService.updateUser(userId,userName)
    }
}