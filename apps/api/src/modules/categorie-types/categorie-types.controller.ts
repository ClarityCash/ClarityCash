import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategorieTypesService } from './categorie-types.service';
import { CreateCategorieTypeDto } from './dto/create-categorie-type.dto';
import { UpdateCategorieTypeDto } from './dto/update-categorie-type.dto';

@Controller('categorie-types')
export class CategorieTypesController {
  constructor(private readonly categorieTypesService: CategorieTypesService) {}

  @Post()
  create(@Body() createCategorieTypeDto: CreateCategorieTypeDto) {
    return this.categorieTypesService.create(createCategorieTypeDto);
  }

  @Get()
  findAll() {
    return this.categorieTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categorieTypesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategorieTypeDto: UpdateCategorieTypeDto) {
    return this.categorieTypesService.update(id, updateCategorieTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categorieTypesService.delete(id);
  }
}
