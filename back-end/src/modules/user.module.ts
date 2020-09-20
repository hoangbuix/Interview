import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/user.schema';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { MajorModule } from './major.module';
import { TeacherModule } from './teacher.module';
import { TopicModule } from './topic.module';
import { CompanyModule } from './company.module';
import { AuthMiddleware } from 'src/middleware/auth.middleware';


@Module({
  imports: [MajorModule, TeacherModule, TopicModule, CompanyModule,
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})

export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({path: 'user', method: RequestMethod.GET}, {path: 'user', method: RequestMethod.PUT});
  }
}