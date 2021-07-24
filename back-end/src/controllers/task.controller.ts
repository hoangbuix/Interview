import { TaskService } from 'src/services/task.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { TaskModel } from 'src/models/task.model';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserRole } from 'src/utils/user-role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { CreateTaskDto } from 'src/dto/create-dto/create-task.dto';
import { ForbiddenException } from 'src/exceptions/forbidden.exception';
import { UpdateTaskDto } from 'src/dto/update-dto/update-task.dto';


@ApiBearerAuth()
@ApiTags('task')
@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Get('/get-all')
    async getAll(): Promise<TaskModel[]> {
        return await this.taskService.getAll();
    }

    @Get('/get-task/:id')
    async getTaskById(@Param('id') id: string): Promise<TaskModel> {
        return await this.taskService.getTaskById(id);
    }

    @Post('/create-task')
    @Roles(UserRole.admin, UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async createTask(@Res() res, @Req() req, @Body() create: CreateTaskDto): Promise<TaskModel> {
        const role = this.taskService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        const task = await this.taskService.createTask(create);
        return res.status(200).json({
            message: 'Tạo mới công việc mới thành công',
            task
        });
    }

    @Put('update-task/:id')
    @Roles(UserRole.admin, UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async updateTask(@Req() req, @Res() res, @Param('id') id: string, @Body() update: UpdateTaskDto) {
        // console.log(req.user)
        const role = this.taskService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        await this.taskService.updateTask(id, update);
        res.json({ message: 'Cập nhật thành công!' });
    }


    @Delete("delete-task/:id")
    @Roles(UserRole.admin, UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async deleteTask(@Req() req, @Res() res, @Param('id') id: string) {
        const role = this.taskService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        await this.taskService.deleteTask(id);
        res.json({ message: 'Xóa công việc thành công!' });
    }

}
