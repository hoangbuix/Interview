import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { MajorModule } from './major.module';
import { TeacherModule } from './teacher.module';
import { TopicModule } from './topic.module';
import { CompanyModule } from './company.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';


@Module({
  imports: [TeacherModule, TopicModule, CompanyModule,
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})

export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware, LoggerMiddleware)
      .forRoutes({ path: 'user', method: RequestMethod.PUT });
  }
}