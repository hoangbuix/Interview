import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LoggerSchema } from "src/schemas/logger.schema";
import { LoggerService } from "src/services/logger.service";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'logger', schema: LoggerSchema }])],
    controllers: [],
    providers: [LoggerService],
    exports: [LoggerService],
})

export class LoggerModule { }