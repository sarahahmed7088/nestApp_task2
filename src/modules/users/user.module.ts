import { Module } from "@nestjs/common";
import { TasksModule } from "../tasks/tasks.module";

import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [TasksModule],
    controllers: [UserController],
    providers: [UserService],
    
  })
  export class UserModel {}