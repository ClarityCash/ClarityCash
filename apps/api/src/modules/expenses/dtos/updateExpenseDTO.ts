import { IsString, IsNotEmpty, IsNumber, IsDate, IsPositive, IsOptional } from 'class-validator';

export class updateExpenseDTO {
    @IsString()
    @IsOptional()
    categoryId: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    amount: number;

    @IsDate()
    @IsOptional()
    date: Date;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    descripcion: string;
}

