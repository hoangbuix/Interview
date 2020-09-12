import { Controller, Get } from "@nestjs/common";
import { CompanyModel } from "src/models/company.model";
import { CompanyService } from "src/services/company.service";


@Controller('company')

export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Get('/get-all')
    async getAll(): Promise<CompanyModel[]> {
        return this.companyService.getAll()
    }
}