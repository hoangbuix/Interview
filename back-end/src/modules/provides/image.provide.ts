import { Connection } from 'mongoose';
import { ImageSchema } from 'src/schemas/image.schema';



export const ImageProviders = [
    {
        provide: 'image',
        useFactory: (connection: Connection) => connection.model('image', ImageSchema),
        inject: ['DEV_CONNECTION'],
    },
];