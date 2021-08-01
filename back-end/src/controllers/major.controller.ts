import { MajorService } from "src/services/major.service";
import { Controller, Get, Post, Body, HttpStatus, Res, Put, Param, Req, UseGuards, Delete } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateMajorDto } from "src/dto/create-dto/create-major.dto";
import { UpdateMajorDto } from "src/dto/update-dto/update-major.dto";
import { ForbiddenException } from "src/exceptions/forbidden.exception";
import { Roles } from "src/auth/decorators/roles.decorator";
import { UserRole } from "src/utils/user-role.enum";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { RolesGuard } from "src/auth/guards/role.guard";
import { MajorModel } from "src/models/major.model";


@ApiBearerAuth()
@ApiTags('major')
@Controller('major')
export class MajorController {
    constructor(private readonly majorService: MajorService) { }



    // @Post('create-major')
    // @Roles(UserRole.admin, UserRole.manager)
    // @UseGuards(JwtAuthGuard, RolesGuard)
    // async createMajor(@Res() res, @Body() createMajorDto: CreateMajorDto) {
    //     const major = await this.majorService.createMajor(createMajorDto);
    //     return res.status(HttpStatus.OK).json({
    //         message: 'Major created successfully',
    //         major
    //     });
    // }

    @Put('/update-major/:id')
    @Roles(UserRole.admin, UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async updateMajor(@Req() req, @Res() res, @Param('id') id: string, @Body() update: UpdateMajorDto) {
        // console.log(req.user)
        const role = this.majorService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        await this.majorService.updateMajor(id, update);
        res.json({ message: 'Cập nhật thành công!' });
    }

    @Delete("delete-major/:id")
    @Roles(UserRole.admin, UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async deleteMajor(@Req() req, @Res() res, @Param('id') id: string) {
        const role = this.majorService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        await this.majorService.deleteMajor(id);
        res.json({ message: 'Xóa ngành học thành công!' });
    }



    @Get('/get-all')
    async getAll() {
        return await this.majorService.getAllMajor();
    }

    @Get('/get-major/:id')
    async getMajorById(@Param('id') id: string): Promise<MajorModel> {
        return await this.majorService.getMajorById(id);
    }


}