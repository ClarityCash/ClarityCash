import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePaymentMethodDTO {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}