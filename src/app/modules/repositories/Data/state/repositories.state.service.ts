import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { ApiHelperService } from 'src/app/core/helpers/api.helper';
import { IRepository } from '../models/repository';

const DATE: string = new Date().toISOString();
const API: string = `https://api.github.com/search/repositories?q=created:>${DATE}&sort=stars&order=desc`

@Injectable({
  providedIn: 'root'
})

export class RepositoriesStateService {
  private updating$ = new BehaviorSubject<boolean>(false);
  private repositories$ = new BehaviorSubject<IRepository[]>([]);
  private url$ = new BehaviorSubject<string>('');

  constructor(private apiHelper: ApiHelperService) {
    const DATE = new Date()
    DATE.setMonth(DATE.getMonth() - 1)
    this.url$.next(`https://api.github.com/search/repositories?q=created:>${DATE.toISOString()}&sort=stars&order=desc`)
  }

  isUpdating$(): Observable<boolean> {
    return this.updating$.asObservable();
  }

  setUpdating(isUpdating: boolean): void {
    this.updating$.next(isUpdating);
  }

  getCurrentUrl(): string {
    return this.url$.getValue();
  }

  setNextUrl(linkHeader: string): void {
    const Link = this.apiHelper.parseLinkHeader(linkHeader);
    this.url$.next(Link["next"]);
  }

  getReposList$(): Observable<IRepository[]> {
    return this.repositories$.asObservable();
  }

  setReposList(repositories: IRepository[]): void {
    const latest = this.repositories$.value;
    const combinedRepos = [...latest, ...repositories];
    this.repositories$.next(combinedRepos);
  }

}
