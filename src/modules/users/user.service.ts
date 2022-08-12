import { Injectable } from "@nestjs/common";
import * as data from "../../data/data.json"
import {TasksService} from '../tasks/tasks.service'
let users
// let users=[{id:1,userName:"Radwa",password:"jfdsfh"},{id:2,userName:"Nada",password:"hgdsug"}]
@Injectable()
export class UserService{
    constructor(private readonly tasksService:TasksService){}
    getAll()
    {
        return data.users

    }
    getById(userId:number)
    {
       const user= data.users.find(user=>user.id===userId)
       const task=this.tasksService.findUserTasks(userId)
       return{user,task}
    }
    addOne(user)
    {
        data.users.push(user)

        return data.users
    }
    deleteOne(userId:number)
    {
        

		 users = data.users.filter(user => user.id !== userId);

		return users
	}
    updateUser(userId:number,userName:any)
    {
        users=data.users.map(user=>{
            if(user.id===userId)
            {
                user.userName=userName.userName
            }
            return user
        }
            )
            return users
    }

}
