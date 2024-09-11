import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { createExpenseDTO } from './dtos/createExpenseDTO';
import { updateExpenseDTO } from './dtos/updateExpenseDTO';

@Controller('expenses')
export class ExpensesController {
    constructor(private readonly expensesService: ExpensesService){}

    @Post()
    create(@Body() createExpenseDTO: createExpenseDTO) {
        return this.expensesService.create(createExpenseDTO);
    }

    @Put(':id')
    update(@Param('id') id: string,
          @Body() updateExpenseDTO: updateExpenseDTO) {
        return this.expensesService.update(id, updateExpenseDTO);
    }

    @Get()
    findAll() {
        return this.expensesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.expensesService.findOne(id);    
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.expensesService.delete(id);
    }   
}
