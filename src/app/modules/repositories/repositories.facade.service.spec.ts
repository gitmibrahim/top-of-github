import { TestBed } from '@angular/core/testing';

import { RepositoriesFacadeService } from './repositories.facade.service';

describe('RepositoriesFacadeService', () => {
  let service: RepositoriesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoriesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
