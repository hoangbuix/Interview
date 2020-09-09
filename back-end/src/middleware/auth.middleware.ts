// import * as jwt from 'jsonwebtoken';
// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import { UnAuthorizedException } from 'src/exceptions/unauthorized.exception';


// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   public resolve() {
//     return async (req: Request, res: Response, next: NextFunction) => {
//       if (req.headers.authorization && (req.headers.authorization as string).split(' ')[0] === 'Bearer') {
//         const token = (req.headers.authorization as string).split(' ')[1];
//         return jwt.verify(token, process.env.JWT_KEY || 'HoaHoa');
//       } else {
//           throw new UnAuthorizedException();
//       }
//     };
//   }
// }