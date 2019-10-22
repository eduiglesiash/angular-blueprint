import { async, TestBed } from '@angular/core/testing';
import { LayoutUiModule } from './layout-ui.module';

describe('LayoutUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LayoutUiModule).toBeDefined();
  });
});
