import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesApiService {

  constructor(private http: HttpClient) { }

  getReposListApi(url: string): Observable<Object> {
    return this.http.get(url, { observe: 'response' }).pipe(shareReplay());
  }
}
