import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type expensesDocument = Expenses & Document;

@Schema()
export class Expenses {
    @Prop()
    description: string;

    @Prop()
    date: Date;

    @Prop()
    amount: number;

    @Prop()
    category_id: string;
}

export const ExpensesSchema = SchemaFactory.createForClass(Expenses);
