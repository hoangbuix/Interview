// import { Injectable } from '@nestjs/common';
// import { UserService } from './user.service';
// import { JwtPlayLoad } from 'src/models/jwtPlayload.model';
// import { NotAcceptableException } from 'src/exceptions/notacceptable.exception';
// import { UnAuthorizedException } from 'src/exceptions/unauthorized.exception';
// import { NotFoundException } from 'src/exceptions/notfound.exception';

// @Injectable()
// export class AuthService {
//   constructor(private readonly userService: UserService) {}

//   async validateUser(playLoad: JwtPlayLoad): Promise<any> {
//     const user = await this.userService.getUserById(playLoad.userId);
//     if (!user) throw new NotFoundException();
//     if (
//       new Date(user.changePasswordAt).getTime() !=
//       new Date(playLoad.changePasswordAt).getTime()
//     )
//       throw new UnAuthorizedException('token đã hết hạn');
//     if (!user.active) throw new NotAcceptableException('Tài khoản đã bị khóa!');
//     return user;
//   }
// }
