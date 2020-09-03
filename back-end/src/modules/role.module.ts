import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleController } from 'src/controllers/role.controller';
import { RoleService } from 'src/services/role.service';
import { RoleSchema } from 'src/schemas/role.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'role', schema: RoleSchema }])],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule {}
