import { IsNotEmpty, IsString, IsDateString, IsOptional, IsMongoId, IsNumberString } from 'class-validator';

export class CreateIncomeDTO {

  @IsMongoId()
  @IsNotEmpty()
  income_type: string;

  @IsNumberString()
  @IsNotEmpty()
  amount: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsMongoId()
  @IsNotEmpty()
  income_source: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsMongoId()
  @IsNotEmpty()
  destination_account: string;

  @IsString()
  @IsOptional()
  notes?: string;

  @IsMongoId()
  @IsNotEmpty()
  payment_method: string;

  @IsMongoId()
  @IsNotEmpty()
  category: string;
}
