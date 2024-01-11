import { Injectable } from '@nestjs/common';
import { Donut } from './donuts.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DonutService {
  private donuts: Donut[];

  constructor(
    @InjectModel('Donut') private readonly donutModel: Model<Donut>,
  ) {}

  async getAllDonuts(): Promise<Donut[]> {
    const donuts = await this.donutModel.find().exec();
    return donuts;
  }
}
