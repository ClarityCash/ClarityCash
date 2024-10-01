import { Module } from '@nestjs/common';
import { CategorieTypesService } from './categorie-types.service';
import { CategorieTypesController } from './categorie-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorieType, CategorieTypeSchema } from './schemas/categorie-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CategorieType.name,
        schema:CategorieTypeSchema
      }
    ])
  ],
  controllers: [CategorieTypesController],
  providers: [CategorieTypesService],
})
export class CategorieTypesModule {}
