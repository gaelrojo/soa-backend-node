import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleItemsService } from './sale-items.service';
import { SaleItem, SaleItemSchema } from './schemas/sale-item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SaleItem.name, schema: SaleItemSchema }]),
  ],
  providers: [SaleItemsService],
  exports: [SaleItemsService],
})
export class SaleItemsModule {}