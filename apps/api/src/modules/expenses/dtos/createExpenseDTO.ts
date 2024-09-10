import { IsString, IsNotEmpty, IsNumber, IsDate, IsPositive, IsOptional } from 'class-validator';

export class createExpenseDTO {
    @IsString()
    @IsNotEmpty()
    categoryId: string;

    @IsNumber()
    @IsPositive()
    amount: number;

    @IsDate()
    date: Date;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    descripcion: string;
}

