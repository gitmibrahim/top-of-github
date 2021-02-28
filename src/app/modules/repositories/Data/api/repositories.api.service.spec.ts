import { TestBed } from '@angular/core/testing';

import { RepositoriesApiService } from './repositories.api.service';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';

describe('RepositoriesApiService', () => {
  let service: RepositoriesApiService;
  let httpClientSpy: { get: jasmine.Spy };
  let reposApiService: RepositoriesApiService;
  let url = 'https://api.github.com/search/repositories?q=created:%3E2021-01-26T03:00:29.308Z&sort=stars&order=desc';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(RepositoriesApiService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    reposApiService = new RepositoriesApiService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected (HttpClient called once)', () => {
    httpClientSpy.get.and.returnValue(of(new HttpResponse()));

    reposApiService.getReposListApi(url).subscribe(
      value => expect(value).toBeInstanceOf(HttpResponse),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
