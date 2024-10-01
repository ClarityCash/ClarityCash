import { Test, TestingModule } from '@nestjs/testing';
import { CategorieTypesController } from './categorie-types.controller';
import { CategorieTypesService } from './categorie-types.service';

describe('CategorieTypesController', () => {
  let controller: CategorieTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategorieTypesController],
      providers: [CategorieTypesService],
    }).compile();

    controller = module.get<CategorieTypesController>(CategorieTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
