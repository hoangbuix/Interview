import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { CreateMeetDto } from "src/dto/create-meet.dto";
import { MeetModel } from "src/models/meet.model";
import { MeetService } from "src/services/meet.service";

@Controller('meet')
export class MeetController {
    constructor(private readonly meetService: MeetService) {}


    @Get('/get-all')
    async getAll(): Promise<MeetModel[]> {
        return await this.meetService.getAll();
    }

    @Post()
    async createMeet(@Res() res, @Body() createMeetDto: CreateMeetDto): Promise<MeetModel> {
        const meet = await this.meetService.createMeet(createMeetDto);
        return res.status(200).json({
            message: 'Meet created successfully',
            meet
        });
    }
}