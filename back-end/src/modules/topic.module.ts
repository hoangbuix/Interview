import { TopicSchema } from "src/schemas/topic.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { TopicController } from "src/controllers/topicr.controller";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'topic', schema: TopicSchema}])],
    controllers: [TopicController],
    providers: [TopicService],
    exports: [TopicService],
})

export class TopicService {}