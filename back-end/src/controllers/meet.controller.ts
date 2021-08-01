import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Roles } from "src/auth/decorators/roles.decorator";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { RolesGuard } from "src/auth/guards/role.guard";
import { CreateMeetDto } from "src/dto/create-dto/create-meet.dto";
import { UpdateMeetDto } from "src/dto/update-dto/update-meet.dto";
import { ForbiddenException } from "src/exceptions/forbidden.exception";
import { MeetModel } from "src/models/meet.model";
import { UserRole } from "src/utils/user-role.enum";
import { MeetService } from "src/services/meet.service";


@ApiBearerAuth()
@ApiTags('meet')
@Controller('meet')
export class MeetController {
    constructor(private readonly meetService: MeetService) { }



    @Post('/create-meet')
    async createMeet(@Res() res, @Body() createMeetDto: CreateMeetDto): Promise<MeetModel> {
        const meet = await this.meetService.createMeet(createMeetDto);
        return res.status(200).json({
            message: 'Meet created successfully',
            meet
        });
    }

    @Put('update-meet/:id')
    @Roles(UserRole.admin, UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async updateMeet(@Req() req, @Res() res, @Param('id') id: string, @Body() update: UpdateMeetDto) {
        // console.log(req.user)
        const role = this.meetService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        await this.meetService.updateMeet(id, update);
        res.json({ message: 'Cập nhật thành công!' });
    }


    @Delete("delete-meet/:id")
    @Roles(UserRole.admin, UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async deleteCompany(@Req() req, @Res() res, @Param('id') id: string) {
        const role = this.meetService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        await this.meetService.deleteMeet(id);
        res.json({ message: 'Xóa cuộc đối thoại thành công!' });
    }

    @Get('/get-all')
    async getAll(): Promise<MeetModel[]> {
        return await this.meetService.getAll();
    }

    @Get('/get-meet/:id')
    async getMeetById(@Param('id') id: string): Promise<MeetModel> {
        return await this.meetService.getMeetById(id);
    }



}