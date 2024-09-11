import { IsOptional, IsString, IsMongoId } from 'class-validator';

export class UpdateCategoryDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsMongoId()
  category_type?: string;
}