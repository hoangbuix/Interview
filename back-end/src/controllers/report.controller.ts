import { Controller, Get, Post } from "@nestjs/common";
import { ReportModel } from "src/models/report.model";
import { ReportService } from "src/services/report.service";
import { CreateReportDto } from "src/dto/create-report.dto";

@Controller('report')
export class ReportController {
    constructor(private readonly reportService:ReportService ) { }


    @Get('/get-all')
    async getAll(): Promise<ReportModel[]> {
        return await this.reportService.getAllReport();
    }

    @Post()
    async createTopic(createReportDto: CreateReportDto) {
        return await this.reportService.createReport(createReportDto);
    }
}