import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { createExpenseDTO } from './dtos/createExpenseDTO';

@Controller('expenses')
export class ExpensesController {
    constructor(private readonly expensesService: ExpensesService){}

    @Post()
    create(@Body() createExpenseDTO: createExpenseDTO) {
        return this.expensesService.create(createExpenseDTO);
    }

    @Get()
    findAll() {
        return this.expensesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.expensesService.findOne(+id); 
    }
}
