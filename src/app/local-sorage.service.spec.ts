import { TestBed } from '@angular/core/testing';

import { LocalSorageService } from './local-sorage.service';

describe('LocalSorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalSorageService = TestBed.get(LocalSorageService);
    expect(service).toBeTruthy();
  });
});
