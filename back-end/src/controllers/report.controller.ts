import { Controller, Get, Post, Body, Response, Request } from "@nestjs/common";
import { ReportModel } from "src/models/report.model";
import { ReportService } from "src/services/report.service";
import { CreateReportDto } from "src/dto/create-report.dto";
import { BadRequestException } from "src/exceptions/badrequest.exception";

@Controller('report')
export class ReportController {
    constructor(private readonly reportService: ReportService) { }


    @Get('/get-all')
    async getAll(): Promise<ReportModel[]> {
        return await this.reportService.getAllReport();
    }

    @Post()
    async createReport(@Request() req,@Response() res, @Body() createReportDto: CreateReportDto) {
        const checkExits = await this.reportService.getReportName(createReportDto.reportName)
        if (checkExits) throw new BadRequestException('Tên báo cáo đã tồn tại!');
        const report = await this.reportService.createReport(createReportDto);
        res.status(200).json(report);
    }
}