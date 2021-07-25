import { TaskService } from "src/services/task.service";
import { Module } from "@nestjs/common";
import { TaskController } from "src/controllers/task.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { TaskSchema } from "src/schemas/task.schema";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'task', schema: TaskSchema }])],
    controllers: [TaskController],
    providers: [TaskService],
    exports: [TaskService]
})

export class TaskModule { }