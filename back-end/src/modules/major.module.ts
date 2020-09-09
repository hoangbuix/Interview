import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MajorSchema } from "src/schemas/major.schema";
import { MajorController } from "src/controllers/major.controller";
import { MajorService } from "src/services/major.service";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'major', schema: MajorSchema}])],
    controllers: [MajorController],
    providers: [MajorService],
    exports: [MajorService],
})

export class MajorModule {}