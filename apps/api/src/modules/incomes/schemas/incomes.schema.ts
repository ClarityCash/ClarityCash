import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IncomeDocument = Income & Document;

@Schema()
export class Income {
  @Prop()
  income_type: string;

  @Prop()
  amount: number;

  @Prop()
  date: Date;

  @Prop()
  income_source: string;

  @Prop()
  description: string;

  @Prop()
  destination_account: string;

  @Prop()
  notes?: string;

  @Prop()
  payment_method: string;

  @Prop()
  category: string;
}

export const IncomeSchema = SchemaFactory.createForClass(Income);
