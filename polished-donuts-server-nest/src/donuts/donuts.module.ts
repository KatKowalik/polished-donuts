import { Module } from '@nestjs/common';
import { DonutsController } from './donuts.controller';
import { DonutService } from './donuts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DonutSchema } from './donuts.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Donut', schema: DonutSchema }]),
  ],
  controllers: [DonutsController],
  providers: [DonutService],
})
export class DonutModule {}
