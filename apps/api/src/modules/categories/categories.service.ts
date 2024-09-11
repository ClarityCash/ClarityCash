import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categories, CategoriesDocument } from './schemas/categories.schema';
import { CreateCategoryDTO } from './dtos/createCategoryDTO';
import { UpdateCategoryDTO } from './dtos/updateCategoryDTO';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories.name) private categoriesModel: Model<CategoriesDocument>,
  ) {}

  async create(createCategoryDto: CreateCategoryDTO) {
    return await this.categoriesModel.create(createCategoryDto);
    }

  async update(id: string, updateCategoryDto: UpdateCategoryDTO) {
    const updatedCategory = await this.categoriesModel.findByIdAndUpdate(id, updateCategoryDto, {
      new: true, // Devuelve el documento actualizado
    }).exec();
    
    if (!updatedCategory) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    
    return updatedCategory;
  }

  async findAll() {
    return await this.categoriesModel.find().exec();
  }

  async findOne(id: string) {
    const category = await this.categoriesModel.findById(id).exec();
    
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    
    return category;
  }

  async delete(id: string) {
    const deletedCategory = await this.categoriesModel.findByIdAndDelete(id).exec();
    
    if (!deletedCategory) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    
    return deletedCategory;
  }
}
