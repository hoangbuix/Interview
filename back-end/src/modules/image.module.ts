import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ImageController } from "src/controllers/image.controller";
import { ImageSchema } from "src/schemas/image.schema";
import { ImageService } from "src/services/image.service";



@Module({
    imports: [MongooseModule.forFeature([{ name: 'image', schema: ImageSchema }])
        // MulterModule.register({
        //     dest: './uploads',
        // })],
    ],
    controllers: [ImageController],
    providers: [ImageService],
    exports: [ImageService]
})

export class ImageModule { }