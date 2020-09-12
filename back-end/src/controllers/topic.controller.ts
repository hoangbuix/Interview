import { Body, Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import { CreateTopicDto } from "src/dto/create-topic.dto";
import { TopicModel } from "src/models/topic.model";
import { TopicService } from "src/services/topic.service";


@Controller('topic')
export class TopicController {
    constructor(private readonly topicService: TopicService) { }

    @Get('/get-all')
    async getAll() {
        return await this.topicService.getAll();
    }

    @Post()
    async createTopic(@Res() res, @Body() createTopicDto: CreateTopicDto): Promise<TopicModel> {
        const topic = await this.topicService.createTopic(createTopicDto);
        return res.status(200).json({
            message: 'Topic created successfully',
            topic
        });
    }

    @Get('/:id')
    async getListDeviceByType(@Req() req, @Res() res, @Param('id') type) {
        res.json(await this.topicService.getTopicId(type));
    }
}