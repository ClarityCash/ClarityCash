import { Injectable } from '@nestjs/common';
import { createExpenseDTO } from './dtos/createExpenseDTO';
import { InjectModel } from '@nestjs/mongoose';
import { Expenses, expensesDocument } from './schemas/expenses.schema'
import { Model } from 'mongoose';

@Injectable()
export class ExpensesService {
    constructor(
        @InjectModel(Expenses.name) private expensesModule: Model<expensesDocument>,
    ) { }

    async create(createExpenseDTO: createExpenseDTO) {
        return await this.expensesModule.create(createExpenseDTO);
    }

    async findAll() {
        return await this.expensesModule.find();
    }

    findOne(id: number) {
        return `This is the information about the idqqq: ${id}`
    }
}


