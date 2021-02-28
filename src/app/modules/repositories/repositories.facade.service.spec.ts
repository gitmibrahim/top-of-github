import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RepositoriesApiService } from './api/repositories.api.service';
import { RepositoriesFacadeService } from './repositories.facade.service';
import { RepositoriesStateService } from './state/repositories.state.service';
import { TestHelp } from '../../shared/test-help/test-help';

describe('RepositoriesFacadeService', () => {
  let service: RepositoriesFacadeService;
  let repositoriesStateServiceMock: any;
  let repositoriesApiServiceMock: any;
  let testHelp: TestHelp;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: RepositoriesStateService, useValue: repositoriesStateServiceMock},
        {provide: RepositoriesApiService, useValue: repositoriesApiServiceMock}
      ]
    });
    service = TestBed.inject(RepositoriesFacadeService);

    repositoriesStateServiceMock = jasmine.createSpyObj(
      'RepositoriesStateService',
      [
        'isUpdating$',
        'setUpdating',
        'getCurrentUrl',
        'setNextUrl',
        'getReposList$',
        'setReposList'
      ]
    );
    repositoriesStateServiceMock.isUpdating$.and.returnValue(of(false));
    testHelp = new TestHelp();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("isUpdating$()", () => {
    beforeEach(() => {
    });

    it('should return false on the application startup', () => {
      service.isUpdating$().subscribe((value: boolean) => {
        expect(value).toBeFalse();
      })
    });
  });

  describe("get repositories()", function() {
    it('get repositories() returns IRepository[]', () => {
      repositoriesStateServiceMock.getReposList$.and.returnValue(testHelp.createRepos(1));
      expect(testHelp.repos[0]).toEqual({
        html_url: 'https://html0',
        name: 'repo_name0',
        description: 'repo_description0',
        stargazers_count: 0,
        open_issues_count: 0,
        created_at: new Date('0'),
        owner: {
          login: 'username0',
          avatar_url: 'https://avatar0'
        }
      });
    });
  });

  describe("newReposListRequest", () => {
    const nextUrl = "https://api.github.com/search/repositories?q=created%3A%3E2021-01-24T22%3A00%3A07.866Z&sort=stars&order=desc&page=2";
    repositoriesApiServiceMock = jasmine.createSpyObj('RepositoriesApiService', ['getReposListApi']);
    beforeEach(() => {
      repositoriesStateServiceMock.getCurrentUrl.and.returnValue(nextUrl);
      repositoriesApiServiceMock.getReposListApi.and.returnValue(testHelp.http.get());
    });

    it('calling times for: state.setUpdating, state.getCurrentUrl, api.getReposListApi, state.setReposList and state.setNextUrl', () => {
      service.newReposListRequest();
      expect(repositoriesStateServiceMock.setUpdating).toHaveBeenCalledTimes(2);
      expect(repositoriesStateServiceMock.getCurrentUrl).toHaveBeenCalledTimes(1);
      expect(repositoriesApiServiceMock.getReposListApi).toHaveBeenCalledTimes(1);
      expect(repositoriesStateServiceMock.setReposList).toHaveBeenCalledTimes(1);
      expect(repositoriesStateServiceMock.setNextUrl).toHaveBeenCalledTimes(1);
    });
  })
});
