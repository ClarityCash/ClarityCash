import { Injectable } from '@nestjs/common';
import { createExpenseDTO } from './dtos/createExpenseDTO';
import { updateExpenseDTO } from './dtos/updateExpenseDTO';
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

    async update(id: string, expense: updateExpenseDTO) {
        return await this.expensesModule.findByIdAndUpdate(id, expense, {
            new: true,
        }).exec();
    }

    async findAll() {
        return await this.expensesModule.find().exec();
    }

    async findOne(id: string) {
        return await this.expensesModule.findById(id).exec();    
    }

    async delete(id: string) {
        return await this.expensesModule.findByIdAndDelete(id).exec();
    }   
}


