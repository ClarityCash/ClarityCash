import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentMethodDTO } from './createPaymentMethodDTO';

export class updatePaymentMethodDTO extends PartialType(CreatePaymentMethodDTO) {}