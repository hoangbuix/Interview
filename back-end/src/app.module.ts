import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { TeacherModule } from './modules/teacher.module';
import { TaskModule } from './modules/task.module';
import { ReportModule } from './modules/report.module';
import { TopicModule } from './modules/topic.module';
import { CompanyModule } from './modules/company.module';
import { MeetModule } from './modules/meet.module';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UserController } from './controllers/user.controller';
import { CompanyController } from './controllers/company.controller';
import { MajorController } from './controllers/major.controller';
import { MeetController } from './controllers/meet.controller';
import { ReportController } from './controllers/report.controller';
import { TeacherController } from './controllers/teacher.controller';
import { TopicController } from './controllers/topic.controller';
import { TaskController } from './controllers/task.controller';
import { ImageModule } from './modules/image.module';
import { ClassModule } from './modules/class.module';
import { ClassController } from './controllers/class.controller';
import { MajorModule } from './modules/major.module';
import { MongooseModule } from '@nestjs/mongoose';
import { default as config } from './config';


const userString = config.db.user && config.db.pass ? (config.db.user + ':' + config.db.pass + '@') : '';
const authSource = config.db.authSource ? ('?authSource=' + config.db.authSource + '&w=1') : '';
const dv = "mongodb+srv://hoangbuix:151998@cluster0.utilx.mongodb.net/interview?retryWrites=true&w=majority";


@Module({
  imports: [MongooseModule.forRoot(dv || 'mongodb://' + userString + config.db.host + ':' + (config.db.port || '27017') + '/' + config.db.database + authSource),
    UserModule,
    TeacherModule,
    TaskModule,
    ReportModule,
    MajorModule,
    TopicModule,
    CompanyModule,
    MeetModule,
    AuthModule,
    ImageModule,
    ClassModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(UserController, CompanyController, MajorController,
        MeetController, ReportController, TeacherController, TopicController, TaskController, ClassController);
  }
}