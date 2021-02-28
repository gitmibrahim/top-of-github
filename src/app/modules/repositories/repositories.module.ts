import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { RepositoryComponent } from './Presentational/components/repository/repository.component';
import { RepositoriesListComponent } from './Presentational/containers/repositories-list/repositories-list.component';



@NgModule({
  declarations: [RepositoryComponent, RepositoriesListComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    RepositoriesListComponent
  ]
})
export class RepositoriesModule { }
