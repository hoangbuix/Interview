import { TeacherController } from "src/controllers/teacher.controller";
import { TeacherService } from "src/services/teacher.service";
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TeacherSchema } from "src/schemas/teacher.schema";



@Module({
    imports: [MongooseModule.forFeature([{ name: 'teacher', schema: TeacherSchema }])],
    controllers: [TeacherController],
    providers: [TeacherService],
    exports: [TeacherService]
})

export class TeacherModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply()
            .forRoutes({ path: 'teacher', method: RequestMethod.ALL })
    }
}