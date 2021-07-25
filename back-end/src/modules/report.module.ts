import { Module } from "@nestjs/common";
import { ReportController } from "src/controllers/report.controller";
import { ReportService } from "src/services/report.service";
import { MeetModule } from "./meet.module";
import { UserModule } from "./user.module";
import { TeacherModule } from "./teacher.module";
import { TopicModule } from "./topic.module";
import { CompanyModule } from "./company.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ReportSchema } from "src/schemas/report.schema";


@Module({
    imports: [MeetModule, UserModule, TeacherModule, TopicModule, CompanyModule,
        MongooseModule.forFeature([{ name: 'report', schema: ReportSchema }])],
    controllers: [ReportController],
    providers: [ReportService],
    exports: [ReportService],
})

export class ReportModule { }