import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CategorieTypeDocument = CategorieType & Document;

@Schema({ collection: 'categorie_type' }) 
export class CategorieType {
  @Prop({ type: String, required: true })
  name: string;
}

// Generate the schema
export const CategorieTypeSchema = SchemaFactory.createForClass(CategorieType);