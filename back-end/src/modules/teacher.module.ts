import { TeacherController } from "src/controllers/teacher.controller";
import { TeacherService } from "src/services/teacher.service";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TeacherSchema } from "src/schemas/teacher.schema";


@Module({
    imports: [MongooseModule.forFeature([{name: 'teacher', schema: TeacherSchema}])],
    controllers: [TeacherController],
    providers: [TeacherService],
    exports: [TeacherService]
})

export class TeacherModule {}