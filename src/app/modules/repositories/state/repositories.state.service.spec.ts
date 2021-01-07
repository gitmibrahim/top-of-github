import { TestBed } from '@angular/core/testing';

import { RepositoriesStateService } from './repositories.state.service';

describe('RepositoriesStateService', () => {
  let service: RepositoriesStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoriesStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
