import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TestHelp } from 'src/app/shared/test-help/test-help';
import { IRepository } from '../../models/repository';
import { RepositoriesFacadeService } from '../../repositories.facade.service';

import { RepositoriesListComponent } from './repositories-list.component';

@Component({
  selector: 'app-repository',
  templateUrl: '',
})
class RepositoryComponent {
  @Input() repo: IRepository;
}

describe('RepositoriesListComponent', () => {
  let component: RepositoriesListComponent;
  let fixture: ComponentFixture<RepositoriesListComponent>;
  let repositoriesFacadeServiceMock: any;
  let testHelp: TestHelp;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RepositoriesListComponent,
        RepositoryComponent
      ],
      providers: [
        {provide: RepositoriesFacadeService, useValue: repositoriesFacadeServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    repositoriesFacadeServiceMock = jasmine.createSpyObj(
      'RepositoriesFacadeService',
      [
        'isUpdating$',
        'repositories',
        'newReposListRequest'
      ]
    );
    testHelp = new TestHelp();
    repositoriesFacadeServiceMock.isUpdating$.and.returnValue(of(false));
    repositoriesFacadeServiceMock.repositories.and.returnValue(of(testHelp.createRepos(2)));
    // component['reposFacade'] = repositoriesFacadeServiceMock;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call isUpdating$ OnInit', () => {
    component.isUpdating$.subscribe((value: boolean) => {
      expect(value).toBeFalse();
    });
  });
});
