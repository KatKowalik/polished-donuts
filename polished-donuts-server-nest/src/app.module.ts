import { Module } from '@nestjs/common';
import { DonutModule } from './donuts/donuts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    DonutModule,
    UserModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(`mongodb://localhost/polished-donutsdb`),
  ],
})
export class AppModule {}
