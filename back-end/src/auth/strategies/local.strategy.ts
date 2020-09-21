import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UnAuthorizedException } from 'src/exceptions/un-authorized.exception';
import { JwtPayload } from 'src/models/jwtPayload.model';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(payload: JwtPayload, done) {
    const user = await this.authService.validateUser(payload);
    if (!user) {
      return done( new UnAuthorizedException("Không tìm thất người dùng này!"), false);
    }
    done(null, user);
  }
}