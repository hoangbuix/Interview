import { Model } from 'mongoose';
import { Injectable, Inject, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { LoggerModel } from 'src/models/logger.model';
import { CreateLogDto } from 'src/dto/create-dto/create-log.dto';
@Injectable()
export class LoggerService {
  constructor(
    @Inject('logger')
    private readonly loggerModal: Model <LoggerModel>,
  ){
  }
  async SaveLog(logDto: CreateLogDto){
    const newLog = new this.loggerModal(logDto);
    return await newLog.save();
  }
}