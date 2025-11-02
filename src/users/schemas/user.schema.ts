import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password_hash: string;

  @Prop({ maxlength: 50 })
  rol: string;

  @Prop({ maxlength: 255 })
  nombreCompleto: string;

  @Prop({ maxlength: 20 })
  telefono: string;

  @Prop({ default: true })
  activo: boolean;

  // timestamps agrega automáticamente createdAt y updatedAt
}

export const UserSchema = SchemaFactory.createForClass(User);