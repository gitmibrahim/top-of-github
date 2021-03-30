import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CoreModule } from './core/core.module';
import { RepositoriesListComponent } from '@repositories/Presentational/containers/repositories-list/repositories-list.component';
import { RepositoriesModule } from '@repositories/repositories.module';
import { SharedModule } from '@shared/shared.module';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        RepositoriesListComponent
      ],
      imports: [
        CoreModule,
        SharedModule,
        RepositoriesModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
