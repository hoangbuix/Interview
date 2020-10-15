import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../exceptions/constants';
import { UserModule } from 'src/modules/user.module';
import { AuthService } from 'src/services/auth.service';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
// import { LocalStrategy } from 'src/strategies/local.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '900s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
     consumer
      .apply(LoggerMiddleware)
      // .exclude(
      //   { path: 'example', method: RequestMethod.GET },
      // )
      .forRoutes();
   }
}