import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiUseTags } from "@nestjs/swagger";
import { Roles } from "src/auth/decorators/roles.decorator";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { RolesGuard } from "src/auth/guards/role.guard";
import { CreateTopicDto } from "src/dto/create-dto/create-topic.dto";
import { UpdateTopicDto } from "src/dto/update-dto/update-topic.dto";
import { ForbiddenException } from "src/exceptions/forbidden.exception";
import { TopicModel } from "src/models/topic.model";
import { UserRole } from "src/utils/user-role.enum";
import { TopicService } from "src/services/topic.service";

@ApiBearerAuth()
@ApiUseTags('topic')
@Controller('topic')
export class TopicController {
    constructor(private readonly topicService: TopicService) { }



    @Post('/create-topic')
    async createTopic(@Res() res, @Body() createTopicDto: CreateTopicDto): Promise<TopicModel> {
        const topic = await this.topicService.createTopic(createTopicDto);
        return res.status(200).json({
            message: 'Topic created successfully',
            topic
        });
    }

    @Put('update-topic/:id')
    @Roles(UserRole.admin, UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async updateTopic(@Req() req, @Res() res, @Param('id') id: string, @Body() update: UpdateTopicDto) {
        // console.log(req.user)
        const role = this.topicService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        await this.topicService.updateTopic(id, update);
        res.json({ message: 'Cập nhật thành công!' });
    }


    @Delete("delete-topic/:id")
    @Roles(UserRole.admin, UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async deleteCompany(@Req() req, @Res() res, @Param('id') id: string) {
        const role = this.topicService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        await this.topicService.deleteTopic(id);
        res.json({ message: 'Xóa chủ đề thành công!' });
    }

    @Get('/get-all')
    async getAll() {
        return await this.topicService.getAll();
    }

    @Get('get-topic/:id')
    async getListDeviceByType(@Req() req, @Res() res, @Param('id') type) {
        res.json(await this.topicService.getTopicId(type));
    }
}