import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Sale extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  vendedor_id: Types.ObjectId;

  @Prop()
  vendedorNombre: string;

  @Prop()
  vendedorEmail: string;

  @Prop()
  fechaVenta: Date;

  @Prop({ type: Number, required: true })
  total: number;

  @Prop({ maxlength: 50 })
  estado: string;

  @Prop()
  metodoPago: string;

  @Prop()
  notas: string;

  // timestamps agrega createdAt y updatedAt
}

export const SaleSchema = SchemaFactory.createForClass(Sale);