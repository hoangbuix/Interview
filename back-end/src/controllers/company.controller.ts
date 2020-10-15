import { Body, Controller, Get, Post, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Roles } from "src/auth/decorators/roles.decorator";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { RolesGuard } from "src/auth/guards/role.guard";
import { CreateCompanyDto } from "src/dto/create-company.dto";
import { CompanyModel } from "src/models/company.model";
import { UserRole } from "src/models/user-role.enum";
import { CompanyService } from "src/services/company.service";


@ApiBearerAuth()
@ApiTags('company')
@Controller('company')
// @Roles(UserRole.admin, UserRole.teacher, UserRole.teacher)
// @UseGuards(JwtAuthGuard, RolesGuard)
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @Get('/get-all')
    async getAll(): Promise<CompanyModel[]> {
        return this.companyService.getAll()
    }

    @Post()
    async createCompany(@Res() res, @Body() createCompanyDto: CreateCompanyDto): Promise<CompanyModel> {
        const company = await this.companyService.createCompany(createCompanyDto);
        return res.status(200).json({
            message: 'Company created successfully',
            company
        });
    }

}