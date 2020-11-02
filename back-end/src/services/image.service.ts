import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ImageModel } from 'src/models/image.model';

@Injectable()
export class ImageService {
    constructor(
        @InjectModel('image') private readonly imageModel: Model<ImageModel>,
    ) { }



    async createImage(img: any): Promise<ImageModel> {
        const exitImage = await this.imageModel.findOne({ "imageName": img.originalname }).exec();
        if (exitImage) throw new NotFoundException('Tên này đã tồn tại!');
        if (!exitImage) {
            const image: ImageModel = new this.imageModel({
                imageName: img.originalname,
                image_file: img.check | img.filename ,
                url: img.path,
                size: img.size,
                type: img.mimetype,
            });

            const result = await image.save();
            return result
        }
    }
}