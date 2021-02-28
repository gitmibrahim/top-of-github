import { HttpEventType } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

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
