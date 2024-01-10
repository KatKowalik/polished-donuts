import { Controller, Get } from '@nestjs/common';
import { DonutService } from './donuts.service';

@Controller('products')
export class DonutsController {
  constructor(private readonly donutService: DonutService) {}

  @Get()
  getDonuts() {
    this.donutService
  }
}