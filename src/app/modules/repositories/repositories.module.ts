import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RepositoryComponent } from './components/repository/repository.component';
import { RepositoriesListComponent } from './containers/repositories-list/repositories-list.component';



@NgModule({
  declarations: [RepositoryComponent, RepositoriesListComponent],
  imports: [
    SharedModule
  ]
})
export class RepositoriesModule { }
