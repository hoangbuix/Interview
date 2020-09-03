import { TaskService } from 'src/services/task.service';
import { Controller, Get } from '@nestjs/common';
import { TaskModel } from 'src/models/task.model';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/get-all')
  async getAll(): Promise<TaskModel[]> {
    return await this.taskService.getAll();
  }
}
