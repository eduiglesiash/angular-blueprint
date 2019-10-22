import { TestBed } from '@angular/core/testing';

import { LayoutFacadeService } from './layout-facade.service';

describe('LayoutFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutFacadeService = TestBed.get(LayoutFacadeService);
    expect(service).toBeTruthy();
  });
});
