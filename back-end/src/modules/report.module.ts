import { ReportSchema } from "src/schemas/report.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { ReportController } from "src/controllers/report.controller";
import { ReportService } from "src/services/report.service";
import { MeetModule } from "./meet.module";


@Module({
    imports: [MeetModule,
        MongooseModule.forFeature([{ name: 'report', schema: ReportSchema }])],
    controllers: [ReportController],
    providers: [ReportService],
    exports: [ReportService],
})

export class ReportModule { }