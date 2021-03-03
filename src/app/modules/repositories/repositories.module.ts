import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RepositoryComponent } from './Presentational/components/repository/repository.component';
import { RepositoriesListComponent } from './Presentational/containers/repositories-list/repositories-list.component';



@NgModule({
  declarations: [RepositoryComponent, RepositoriesListComponent],
  imports: [
    SharedModule
  ],
  exports: [
    RepositoriesListComponent
  ]
})
export class RepositoriesModule { }
