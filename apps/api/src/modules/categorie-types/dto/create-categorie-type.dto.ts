import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategorieTypeDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
