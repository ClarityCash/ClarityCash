import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategorieTypeDto } from './dto/create-categorie-type.dto';
import { UpdateCategorieTypeDto } from './dto/update-categorie-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CategorieTypeDocument, CategorieType } from './schemas/categorie-type.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategorieTypesService {
  constructor(
    @InjectModel(CategorieType.name) private categorieTypeModel: Model<CategorieTypeDocument>,
  ) {}


  async create(createCategorieTypeDto: CreateCategorieTypeDto) {
    return await this.categorieTypeModel.create(createCategorieTypeDto);
  }

  async findAll() {
    return await this.categorieTypeModel.find().exec();
  }

  async findOne(id: string) {
    const categoryType = await this.categorieTypeModel.findById(id).exec();
    
    if (!categoryType) {
      throw new NotFoundException(`Category type with ID ${id} not found`);
    }
    
    return categoryType;
  }

  async update(id: string, updateCategorieTypeDto: UpdateCategorieTypeDto) {
    const updatedCategoryType = await this.categorieTypeModel.findByIdAndUpdate(id, updateCategorieTypeDto, {
      new: true, // Devuelve el documento actualizado
    }).exec();
    
    if (!updatedCategoryType) {
      throw new NotFoundException(`Category type with ID ${id} not found`);
    }
    
    return updatedCategoryType;
  }

  async delete(id: string) {
    const deletedCategoryType = await this.categorieTypeModel.findByIdAndDelete(id).exec();
    
    if (!deletedCategoryType) {
      throw new NotFoundException(` type with ID ${id} not found`);
    }
    
    return deletedCategoryType;
  }
}
