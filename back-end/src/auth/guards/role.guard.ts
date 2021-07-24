import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from 'src/utils/user-role.enum';
import { UserModel } from 'src/models/user.model';
import { InstanceType } from 'typegoose';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly _reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const roles = this._reflector.get<UserRole[]>(
      'roles',
      context.getHandler(),
    );

    if (!roles || roles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user: InstanceType<UserModel> = request.user;

    const hasRole = () => user.roles.some(role => roles.indexOf(role) >= 0);

    if (user && user.roles && hasRole()) {
      return true;
    }

    throw new HttpException(
      'You do not have permission (Roles)',
      HttpStatus.UNAUTHORIZED,
    );
  }
}
