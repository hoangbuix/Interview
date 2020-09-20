import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user.module';
import { TeacherModule } from './modules/teacher.module';
import { TaskModule } from './modules/task.module';
import { MajorModule } from './modules/major.module';
import { ReportModule } from './modules/report.module';
import { TopicModule } from './modules/topic.module';
import { CompanyModule } from './modules/company.module';
import { MeetModule } from './modules/meet.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UserController } from './controllers/user.controller';
import { Connection } from 'mongoose';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './shared/core/core.module';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://hoangbuix:151998@cluster0.utilx.mongodb.net/interview?retryWrites=true&w=majority"),

    UserModule,
    TeacherModule,
    TaskModule,
    ReportModule,
    MajorModule,
    TopicModule,
    CompanyModule,
    MeetModule,
    AuthModule,
    CoreModule
  ],
})
export class AppModule {}