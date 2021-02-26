import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryComponent } from './repository.component';

describe('RepositoryComponent', () => {
  let component: RepositoryComponent;
  let fixture: ComponentFixture<RepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`dateTime() should return format 'yyyy-MM-dd'`, () => {
    let dateTime = component.dateTime(new Date("2021-01-27T13:02:06Z"));
    expect(dateTime).toBe("2021-01-27");
  });

  it(`dateTitle() should return format 'Day Mth dd yyyy`, () => {
    let dateTitle = component.dateTitle(new Date("2021-01-27T13:02:06Z"));
    expect(dateTitle).toBe("Wed Jan 27 2021");
  });

  it(`relativeDate() should return human-readable relative date`, () => {
    let relativeDate = component.relativeDate(new Date("2021-01-27T13:02:06Z"));
    expect(relativeDate).toBe("27 January 2021");
  });
});
