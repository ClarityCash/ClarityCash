import { Module } from '@nestjs/common';
import { PaymentMethodsController } from './payment-methods.controller';
import { PaymentMethodsService } from './payment-methods.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentMethods, PaymentMethodsSchema } from './schemas/payment-methods.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PaymentMethods.name,
        schema:PaymentMethodsSchema
      }
    ])
  ],
  controllers: [PaymentMethodsController],
  providers: [PaymentMethodsService]
})
export class PaymentMethodsModule {}
