import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CategoriesDocument = Categories & Document;

@Schema()
export class Categories {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: false })
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'CategoryType', required: true })
  category_type: Types.ObjectId;

}

// Generate the schema
export const CategoriesSchema = SchemaFactory.createForClass(Categories);

// // Example of how you can return the object in a service or controller
// export function formatCategory(category: CategoriesDocument, category_type: string) {
//   return {
//     id: category._id.toString(),
//     created_at: category.createdAt,
//     description: category.description,
//     name: category.name,
//     category_type_id: category.category_type.toString(),
//     category_type_name: category_type,
//   };
// }
