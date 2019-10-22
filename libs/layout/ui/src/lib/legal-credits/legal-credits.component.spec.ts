import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalCreditsComponent } from './legal-credits.component';

describe('LegalCreditsComponent', () => {
  let component: LegalCreditsComponent;
  let fixture: ComponentFixture<LegalCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
