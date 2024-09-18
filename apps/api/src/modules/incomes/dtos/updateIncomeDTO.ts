import { PartialType } from '@nestjs/mapped-types';
import { CreateIncomeDTO } from './createIncomeDTO';

export class UpdateIncomeDTO extends PartialType(CreateIncomeDTO) {}