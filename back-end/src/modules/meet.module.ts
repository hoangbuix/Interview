import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MeetController } from "src/controllers/meet.controller";
import { MeetSchema } from "src/schemas/meet.schema";
import { MeetService } from "src/services/meet.service";


@Module({
    imports: [MongooseModule.forFeature([{ name:'meeting', schema: MeetSchema}])],
    controllers: [MeetController],
    providers: [MeetService],
    exports: [MeetService]
})


export class MeetModule {}