import { Module } from "@nestjs/common";
import { TeacherModule } from "./teacher.module";
import { MajorController } from "src/controllers/major.controller";
import { MajorService } from "src/services/major.service";
import { ClassModule } from "./class.module";
import { MongooseModule } from "@nestjs/mongoose";
import { MajorSchema } from "src/schemas/major.schema";
import { UserModule } from "./user.module";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'major', schema: MajorSchema }]),
        TeacherModule, UserModule, ClassModule],
    controllers: [MajorController],
    providers: [MajorService],
    exports: [MajorService],
})

export class MajorModule { }