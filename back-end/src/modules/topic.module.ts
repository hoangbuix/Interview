import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TopicController } from "src/controllers/topic.controller";
import { TopicSchema } from "src/schemas/topic.schema";
import { TopicService } from "src/services/topic.service";



@Module({
    imports: [MongooseModule.forFeature([{ name: 'topic', schema: TopicSchema }])],
    controllers: [TopicController],
    providers: [TopicService],
    exports: [TopicService]
})

export class TopicModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply()
            .forRoutes({ path: '/topic', method: RequestMethod.ALL });
    }
}