import { MajorService } from "src/services/major.service";
import { Controller, Get, Post, Body, HttpStatus, Res } from "@nestjs/common";
import { CreateMajorDto } from "src/dto/create-major.dto";


@Controller('major')
export class MajorController {
    constructor(private readonly majorService: MajorService) {}

    @Get('/get-all')
    async getAll() {
        return await this.majorService.getAllMajor();
    }

    @Post()
    async createMajor(@Res() res, @Body() createMajorDto: CreateMajorDto) {
        const major = await this.majorService.createMajor(createMajorDto);
        return res.status(HttpStatus.OK).json({
            message: 'Major created successfully',
            major
        });
    }
}