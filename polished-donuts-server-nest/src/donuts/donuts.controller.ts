import { Controller, Get } from '@nestjs/common';
import { DonutService } from './donuts.service';

@Controller('donuts')
export class DonutsController {
  constructor(private readonly donutService: DonutService) {}

  @Get()
  async getDonuts() {
    return await this.donutService.getAllDonuts();
  }
}
