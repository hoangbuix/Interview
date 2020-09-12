import { TaskModel } from "src/models/task.model";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateTaskDto } from "src/dto/create-task.dto";
import { NotFoundException } from "src/exceptions/not-found.exception";

@Injectable()
export class TaskService {
    constructor(
        @InjectModel('task') private readonly taskModel: Model<TaskModel>
    ){}

    async getAll(): Promise<TaskModel[]> {
        return this.taskModel.find().exec();
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<TaskModel> {
        const exitTask = await this.taskModel.findOne({_id: createTaskDto.taskId});
        if(exitTask) throw new NotFoundException('Task đã tồn tại!');
        const task: TaskModel = new this.taskModel(createTaskDto);
        return await task.save();
    }
    
}