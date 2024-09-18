import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { CreateIncomeDTO } from './dtos/createIncomeDTO';
import { UpdateIncomeDTO } from './dtos/updateIncomeDTO';

@Controller('incomes')
export class IncomesController {
    constructor(private readonly incomesService: IncomesService) {}

    @Post()
    create(@Body() createIncomeDTO: CreateIncomeDTO) {
        return this.incomesService.create(createIncomeDTO);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateIncomeDTO: UpdateIncomeDTO) {
        return this.incomesService.update(id, updateIncomeDTO);
    }

    @Get() 
    findAll() {
        return this.incomesService.findAll();
    }

    @Get(':id') 
    findOne(@Param('id') id: string) {
        return this.incomesService.findOne(id);
    }

    @Delete(':id') 
    delete(@Param('id') id: string) {
        return this.incomesService.delete(id);
    }
}
