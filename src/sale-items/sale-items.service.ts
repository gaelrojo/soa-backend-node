import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { SaleItem } from './schemas/sale-item.schema';

@Injectable()
export class SaleItemsService {
  constructor(
    @InjectModel(SaleItem.name) private saleItemModel: Model<SaleItem>,
  ) {}

  async createMany(saleId: string, items: any[]): Promise<SaleItem[]> {
    const saleItems = items.map((item) => ({
      sale_id: new Types.ObjectId(saleId),  // <-- Convertir string a ObjectId
      producto_id: item.producto_id,
      productoNombre: item.productoNombre,
      cantidad: item.cantidad,
      precio_unitario: item.precio_unitario,
      subtotal: item.cantidad * item.precio_unitario,
    }));

    return this.saleItemModel.insertMany(saleItems);
  }

  async findBySaleId(saleId: string): Promise<SaleItem[]> {
    return this.saleItemModel.find({ sale_id: new Types.ObjectId(saleId) }).exec();  // <-- También aquí
  }

  async deleteBySaleId(saleId: string): Promise<void> {
    await this.saleItemModel.deleteMany({ sale_id: new Types.ObjectId(saleId) }).exec();  // <-- Y aquí
  }
}