import { TaskModel } from "src/models/task.model";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { NotFoundException } from "src/exceptions/not-found.exception";
import { CreateTaskDto } from "src/dto/create-dto/create-task.dto";
import { UpdateTaskDto } from "src/dto/update-dto/update-task.dto";
import { UserRole } from "src/utils/user-role.enum";

@Injectable()
export class TaskService {
    constructor(
        @InjectModel('task') private readonly taskModel: Model<TaskModel>
    ) { }

    async createTask(createTaskDto: CreateTaskDto): Promise<TaskModel> {
        const exitTask = await this.taskModel.findOne({ _id: createTaskDto.taskId });
        if (exitTask) throw new NotFoundException('Task đã tồn tại!');
        const task: TaskModel = new this.taskModel(createTaskDto);
        return await task.save();
    }

    async updateTask(id: string, update: UpdateTaskDto): Promise<TaskModel> {
        const task = await this.taskModel.findByIdAndUpdate({ "_id": id, active: true }, { taskName: update.taskName, title: update.title, description: update.description, active: update.active, updatedAt: new Date() }, { new: true }).exec().catch(err => {
            throw new NotFoundException('Không tìm thấy công việc này của bạn yêu cầu!');
        });
        return task;
    }

    async deleteTask(id: string) {
        const task = await this.taskModel.findByIdAndUpdate({ "_id": id }, { active: false }, { new: true }).exec().catch((err) => {
            throw new NotFoundException("Không tìm thấy công ty để xóa!");
        });
        return task;
    }

    async getAll(): Promise<TaskModel[]> {
        return this.taskModel.find().exec();
    }

    async getTaskById(id: string) {
        const task = await this.taskModel.findById({ _id: id }).exec()
        if (!task) throw new NotFoundException(`${id} này không tồn tại`);
        return task;
    }


    public getPermission = (permissions: any) => {
        const role = UserRole
        const isAdmin = permissions.includes(role.admin);
        const isUser = permissions.includes(role.user);
        const isTeacher = permissions.includes(role.teacher);
        const isStudent = permissions.includes(role.student);
        const isManager = permissions.includes(role.manager);
        return { isAdmin, isManager, isTeacher, isStudent, isUser }
    }

}