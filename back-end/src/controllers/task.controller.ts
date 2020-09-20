import { TaskService } from 'src/services/task.service';
import { Controller, Get } from '@nestjs/common';
import { TaskModel } from 'src/models/task.model';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiBearerAuth()
@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/get-all')
  async getAll(): Promise<TaskModel[]> {
    return await this.taskService.getAll();
  }
}
