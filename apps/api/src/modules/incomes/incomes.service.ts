import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Income, IncomeDocument } from './schemas/incomes.schema';
import { Model } from 'mongoose';
import { CreateIncomeDTO } from './dtos/createIncomeDTO';
import { UpdateIncomeDTO } from './dtos/updateIncomeDTO';

@Injectable()
export class IncomesService {
    constructor(
        @InjectModel(Income.name) private incomeModule: Model<IncomeDocument>
    ) {}    

    async create(income: CreateIncomeDTO): Promise<Income> {
        const newIncome = new this.incomeModule(income);
        return newIncome.save();
    }

    async update(id: string, income: UpdateIncomeDTO) {
        return await this.incomeModule.findByIdAndUpdate(id, income, { new: true }).exec();    
    }

    async findAll() {
        return await this.incomeModule.find().exec();
    }

    async findOne(id: string) {
        const income = await this.incomeModule.findById(id).exec();

        if (!income) {
            throw new NotFoundException(`Income with ID ${id} not found`);
        }   
    }

    async delete(id: string) {
        const incomeDeleted = await this.incomeModule.findByIdAndDelete(id).exec();

        if (!incomeDeleted) {
            throw new NotFoundException(`Income with ID ${id} not found`);
        }   
    }
}
