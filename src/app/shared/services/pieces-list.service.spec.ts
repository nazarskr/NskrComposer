import { TestBed } from '@angular/core/testing';

import { PiecesListService } from './pieces-list.service';

describe('PiecesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PiecesListService = TestBed.get(PiecesListService);
    expect(service).toBeTruthy();
  });
});
