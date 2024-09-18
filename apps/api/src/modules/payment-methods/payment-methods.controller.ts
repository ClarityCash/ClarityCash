import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PaymentMethodsService } from './payment-methods.service';
import { CreatePaymentMethodDTO } from './dtos/createPaymentMethodDTO';
import { updatePaymentMethodDTO } from './dtos/updatePaymentMethodDTO';

@Controller('payment-methods')
export class PaymentMethodsController {
    constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

    @Post()
    async create(@Body() CreatePaymentMethodDTO: CreatePaymentMethodDTO) {
        return await this.paymentMethodsService.create(CreatePaymentMethodDTO);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePaymentMethodDTO: updatePaymentMethodDTO) {
        return this.paymentMethodsService.update(id, updatePaymentMethodDTO);
    }

    @Get()
    findAll() {
        return this.paymentMethodsService.findAll();
    }

    @Get(':id') 
    findOne(@Param('id') id: string) {
        return this.paymentMethodsService.findOne(id);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.paymentMethodsService.delete(id);
    }
}
