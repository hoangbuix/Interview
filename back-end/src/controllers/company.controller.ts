import { Body, Controller, Get, Post, Res, UseGuards, Param, Put, Req, Delete } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Roles } from "src/auth/decorators/roles.decorator";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { RolesGuard } from "src/auth/guards/role.guard";
import { CreateCompanyDto } from "src/dto/create-dto/create-company.dto";
import { UpdateCompanyDto } from "src/dto/update-dto/update-company.dto";
import { UpdateRoleDto } from "src/dto/update-dto/update-role";
import { ForbiddenException } from "src/exceptions/forbidden.exception";
import { CompanyModel } from "src/models/company.model";
import { UserRole } from "src/utils/user-role.enum";
import { CompanyService } from "src/services/company.service";



@ApiBearerAuth()
@ApiTags('company')
@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @Get('/get-all')
    async getAll(): Promise<CompanyModel[]> {
        return this.companyService.getAll()
    }

    @Get('/get-company/:id')
    async getCompanyById(@Param('id') id: string): Promise<CompanyModel> {
        return await this.companyService.getCompanyById(id);
    }

    @Post('/create-company')
    @Roles(UserRole.admin, UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async createCompany(@Res() res, @Req() req, @Body() createCompanyDto: CreateCompanyDto): Promise<CompanyModel> {
        const role = this.companyService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        const company = await this.companyService.createCompany(createCompanyDto);
        return res.status(200).json({
            message: 'Tạo mới công ty thành công',
            company
        });
    }

    @Put('update-company/:id')
    @Roles(UserRole.admin, UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async updateCompany(@Req() req, @Res() res, @Param('id') id: string, @Body() update: UpdateCompanyDto) {
        // console.log(req.user)
        const role = this.companyService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        await this.companyService.updateCompany(id, update);
        res.json({ message: 'Cập nhật thành công!' });
    }


    @Delete("delete-company/:id")
    @Roles(UserRole.admin, UserRole.manager)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async deleteCompany(@Req() req, @Res() res, @Param('id') id: string) {
        const role = this.companyService.getPermission(req.user.roles);
        if (!(role.isAdmin || role.isManager)) throw new ForbiddenException('Bạn không có quyền để thực hiện điều này!');
        await this.companyService.deleteCompany(id);
        res.json({ message: 'Xóa công ty thành công!' });
    }



}