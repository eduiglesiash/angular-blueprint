import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavigatorComponent } from './app-navigator.component';

describe('AppNavigatorComponent', () => {
  let component: AppNavigatorComponent;
  let fixture: ComponentFixture<AppNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
