import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { IRepository } from '@repositories/Data/models/repository';
import { RepositoriesFacadeService } from '@repositories/Facade/repositories.facade.service';
import { RepositoriesListComponent } from './repositories-list.component';


@Component({
  selector: 'app-repository',
  template: '',
})
class RepositoryComponent {
  @Input() repo: IRepository;
}

describe('RepositoriesListComponent', () => {
  let component: RepositoriesListComponent;
  let fixture: ComponentFixture<RepositoriesListComponent>;
  let repositoriesFacadeServiceMock: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RepositoriesListComponent,
        RepositoryComponent
      ],
      providers: [
        {provide: RepositoriesFacadeService, useValue: repositoriesFacadeServiceMock}
      ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RepositoriesListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
