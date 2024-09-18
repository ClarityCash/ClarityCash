import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentMethodsDocument = PaymentMethods & Document;

@Schema({ collection: 'payment_methods' }) 
export class PaymentMethods {
  @Prop()
  description: string;

  @Prop()
  name: string;
}

export const PaymentMethodsSchema = SchemaFactory.createForClass(PaymentMethods);
