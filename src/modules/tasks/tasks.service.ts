import { Injectable } from '@nestjs/common';
import * as data from '../../data/data.json'
let tasks
@Injectable()
export class TasksService{
    getAll()
    {
        return data.tasks
    }
    getById(taskId:number)
    {
        return data.tasks.find(task=>task.id===taskId)
    }
    addOne(task)
    {
        data.tasks.push(task)
        return data.tasks
    }
    deleteOne(taskId:number)
    {
        

		 tasks = data.tasks.filter(task => task.id !== taskId);

		return tasks
	}
    updatetask(taskId:number,title:string)
    {
        tasks=data.tasks.map(task=>{
            if(task.id===taskId)
            {
                task.title=title
            }
            return task
        }
            )
            return tasks
    }
    findUserTasks(userId: number) {
		return data.tasks.filter(task => task.userId === userId )
	}
}