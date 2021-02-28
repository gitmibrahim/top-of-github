import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositoriesApiService } from '../Data/api/repositories.api.service';
import { IRepository } from '../Data/models/repository';
import { RepositoriesStateService } from '../Data/state/repositories.state.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesFacadeService {

  constructor(private reposState: RepositoriesStateService, private reposApi: RepositoriesApiService) { }

  isUpdating$(): Observable<boolean> {
    return this.reposState.isUpdating$();
  }

  get repositories(): Observable<IRepository[]> {
    return this.reposState.getReposList$();
  }

  newReposListRequest() {
    this.reposState.setUpdating(true);
    const url = this.reposState.getCurrentUrl();

    this.reposApi.getReposListApi(url).subscribe((reposResponse: Response) => {
      this.reposState.setReposList(reposResponse['body']['items']);
      this.reposState.setNextUrl(reposResponse['headers'].get('Link'));
      this.reposState.setUpdating(false);
      window.scrollBy({
        top: 200,
        behavior: 'smooth'
      })
    });
  }
}
