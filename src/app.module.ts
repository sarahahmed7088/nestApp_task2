import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { UserModel } from './modules/users/user.module';

@Module({
  imports: [UserModel,TasksModule],
  
})
export class AppModule {}
