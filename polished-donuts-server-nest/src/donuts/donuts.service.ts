import { Injectable } from '@nestjs/common';
import { Donut } from './donuts.model';

@Injectable()
export class DonutService {
  donuts: Donut[];
}
