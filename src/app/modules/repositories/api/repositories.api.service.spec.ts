import { TestBed } from '@angular/core/testing';

import { RepositoriesApiService } from './repositories.api.service';

describe('RepositoriesApiService', () => {
  let service: RepositoriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
