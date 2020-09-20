import * as jwt from 'jsonwebtoken';
import { jwtConstants } from 'src/exceptions/constants';

export class BaseController {

  constructor() {}

  protected getUserIdFromToken(authorization) {
    if (!authorization) return null;

    const token = authorization.split(' ')[1];
    const decoded: any = jwt.verify(token, jwtConstants.secret);
    return decoded.id;
  }
}