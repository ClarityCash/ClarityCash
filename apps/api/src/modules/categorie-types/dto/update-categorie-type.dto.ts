import { PartialType } from '@nestjs/mapped-types';
import { CreateCategorieTypeDto } from './create-categorie-type.dto';

export class UpdateCategorieTypeDto extends PartialType(CreateCategorieTypeDto) {}
