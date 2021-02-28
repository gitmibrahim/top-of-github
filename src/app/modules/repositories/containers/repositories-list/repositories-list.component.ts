import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRepository } from '../../models/repository';
import { RepositoriesFacadeService } from '../../repositories.facade.service';

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.scss']
})
export class RepositoriesListComponent implements OnInit {
  repositories$: Observable<IRepository[]>;
  isUpdating$: Observable<boolean>;

  constructor(private reposFacade: RepositoriesFacadeService) { }

  ngOnInit() {
    this.isUpdating$ = this.reposFacade.isUpdating$();
    this.repositories$ = this.reposFacade.repositories;
    this.requestNextReposPage(true);
  }

  requestNextReposPage(updateNow: boolean = false): void{
    if (updateNow) this.reposFacade.newReposListRequest();
  }

}
