import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post ,Put} from "@nestjs/common";
import {TasksService} from './tasks.service'
@Controller('tasks')
export class TasksController{
    constructor(private readonly tasksService:TasksService){}
    @Get()
    getAll()
    {
        return this.tasksService.getAll();
    }
    @Get(':taskId')
    getById(
        @Param('taskId',ParseIntPipe)taskId:number
        )
    {
        return this.tasksService.getById(taskId)
    }
    @Post()
    addOne(
        @Body() task:any
    )
    {
        return this.tasksService.addOne(task)
    }
    @Delete(':taskId')
    deleteOne(
        @Param('taskId',ParseIntPipe)taskId:number
    )
    {
        return this.tasksService.deleteOne(taskId)
    }
    @Put(':taskId')
    updateUser(
        @Param('taskId',ParseIntPipe)taskId:number,
        @Body()title:any
    )
    {
        return this.tasksService.updatetask(taskId,title)
    }
}