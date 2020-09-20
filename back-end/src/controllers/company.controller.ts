import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { CreateCompanyDto } from "src/dto/create-company.dto";
import { CompanyModel } from "src/models/company.model";
import { CompanyService } from "src/services/company.service";


@Controller('company')

export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

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