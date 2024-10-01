import { Test, TestingModule } from '@nestjs/testing';
import { CategorieTypesService } from './categorie-types.service';

describe('CategorieTypesService', () => {
  let service: CategorieTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategorieTypesService],
    }).compile();

    service = module.get<CategorieTypesService>(CategorieTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
