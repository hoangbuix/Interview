import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RoleModel } from 'src/models/role.model';
import { Model } from 'mongoose';
import { RoleDto } from 'src/dto/role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel('role') private readonly roleModel: Model<RoleModel>,
  ) {}

  async getAll(): Promise<RoleModel[]> {
    return await this.roleModel.find().exec();
  }

  async addRole(createRoleDto: RoleDto): Promise<RoleModel> {
    const createRole = new this.roleModel(createRoleDto);
    const result = await createRole.save();
    return result;
  }
}
