import { async, TestBed } from '@angular/core/testing';
import { LayoutDomainModule } from './layout-domain.module';

describe('LayoutDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LayoutDomainModule).toBeDefined();
  });
});
