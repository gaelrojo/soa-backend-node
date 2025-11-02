import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { Sale, SaleSchema } from './schemas/sale.schema';
import { SaleItemsModule } from '../sale-items/sale-items.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sale.name, schema: SaleSchema }]),
    SaleItemsModule,
  ],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}