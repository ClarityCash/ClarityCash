import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDTO } from './dtos/createCategoryDTO';
import { UpdateCategoryDTO } from './dtos/updateCategoryDTO';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService){}

    @Post()
    create(@Body() createCategoryDTO: CreateCategoryDTO) {
        return this.categoriesService.create(createCategoryDTO);
    }

    @Put(':id')
    update(@Param('id') id: string,
          @Body() updateCategoryDTO: UpdateCategoryDTO) {
        return this.categoriesService.update(id, updateCategoryDTO);
    }

    @Get()
    findAll() {
        return this.categoriesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.categoriesService.findOne(id);    
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.categoriesService.delete(id);
    }   
}
