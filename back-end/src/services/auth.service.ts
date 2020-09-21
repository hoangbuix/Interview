import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { jwtConstants } from 'src/exceptions/constants';
import { NotAcceptableException } from 'src/exceptions/not-acceptable.exception';
import { NotFoundException } from 'src/exceptions/not-found.exception';
import { UnAuthorizedException } from 'src/exceptions/un-authorized.exception';
import { JwtPayload } from 'src/models/jwtPayload.model';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService
  ) {}


  async validateUser(payload: JwtPayload): Promise<any> {
    const user = await this.userService.getUserById(payload._id);
    if (!user) throw new NotFoundException();
    if (new Date(user.changePasswordAt).getTime() !== new Date(payload.changePasswordAt).getTime())
      throw new UnAuthorizedException('Token đã hết hạn!');
    if (!user.active) throw new NotAcceptableException('Tài khoản đã bị khóa!');
    return user;
  }
}