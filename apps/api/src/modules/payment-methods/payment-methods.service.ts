import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaymentMethodsDocument, PaymentMethods, PaymentMethodsSchema } from './schemas/payment-methods.schema';
import { Model } from 'mongoose';
import { CreatePaymentMethodDTO } from './dtos/createPaymentMethodDTO';
import { updatePaymentMethodDTO } from './dtos/updatePaymentMethodDTO';

@Injectable()
export class PaymentMethodsService{
    constructor(
        @InjectModel(PaymentMethods.name) private paymentMethodsModule: Model<PaymentMethodsDocument>
    ) {}  
    
    async create(paymentMethod: CreatePaymentMethodDTO): Promise<PaymentMethods> {
        const newPaymentMethod = new this.paymentMethodsModule(paymentMethod);
        return newPaymentMethod.save();
    } 
    
    async findAll() {
        return await this.paymentMethodsModule.find().exec();
    }

    async findOne(id: string) {        
        const paymentMethod = await this.paymentMethodsModule.findById(id).exec();
        if(!paymentMethod){
            throw new NotFoundException(`Payment Method with ID ${id} not found`);
        }

        return paymentMethod;
    }

    async update(id: string, paymentMethod: updatePaymentMethodDTO) {
        return await this.paymentMethodsModule.findByIdAndUpdate(id, paymentMethod, { new: true }).exec();  
    }

    async delete(id: string) {
        const paymentMethodDeleted = await this.paymentMethodsModule.findByIdAndDelete(id).exec();

        if(!paymentMethodDeleted){
            throw new NotFoundException(`Payment Method with ID ${id} not found`);
        }
    }
}

