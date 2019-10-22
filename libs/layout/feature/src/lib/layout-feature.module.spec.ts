import { async, TestBed } from '@angular/core/testing';
import { LayoutFeatureModule } from './layout-feature.module';

describe('LayoutFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LayoutFeatureModule).toBeDefined();
  });
});
