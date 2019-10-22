import { async, TestBed } from '@angular/core/testing';
import { SharedUiLayoutModule } from './shared-ui-layout.module';

describe('SharedUiLayoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiLayoutModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiLayoutModule).toBeDefined();
  });
});
