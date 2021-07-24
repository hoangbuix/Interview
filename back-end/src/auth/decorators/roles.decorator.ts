import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/utils/user-role.enum';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);