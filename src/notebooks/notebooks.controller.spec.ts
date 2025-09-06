import { Test, TestingModule } from '@nestjs/testing';
import { NotebooksController } from './notebooks.controller';
import { NotebooksService } from './notebooks.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Notebook } from './entities/notebook.entity';

describe('NotebooksController', () => {
  let controller: NotebooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotebooksController],
      providers: [
        NotebooksService,
        {
          provide: getRepositoryToken(Notebook),
          useValue: {}, // mock del repositorio
        },
      ],
    }).compile();

    controller = module.get<NotebooksController>(NotebooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
