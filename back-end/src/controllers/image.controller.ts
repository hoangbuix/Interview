import { Body, Controller, Get, Param, Post, Req, Res, UploadedFile, UploadedFiles, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { extname, join } from "path";
import { diskStorage } from 'multer';
import { Roles } from "src/auth/decorators/roles.decorator";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ImageService } from "src/services/image.service";
import { UserRole } from "src/utils/user-role.enum";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";


const storage = {
    storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
            return cb(null, `${randomName}${extname(file.originalname)}`)
        }
    })
}


@ApiBearerAuth()
@ApiTags('image')
@Controller('image')
export class ImageController {
    constructor(private readonly imageService: ImageService) { }

    @Post('/create-image')
    @Roles()
    @UseInterceptors(FileInterceptor('image', storage))
    @UseGuards()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    createImage(@UploadedFile() img, @Res() res) {
        // console.log(img)
        const check = img ? (img.filename || img.name) : ""
        const data = { ...img, check }
        const image = this.imageService.createImage(data);
        res.status(200).json({
            message: 'Tạo mới ảnh thành công',
            image
        });
    }

    @Get('/:image')
    getImage(@Param('image') image, @Res() res): void | any {
        return res.sendFile(join(process.cwd(), '/uploads/' + image))
    }
}

