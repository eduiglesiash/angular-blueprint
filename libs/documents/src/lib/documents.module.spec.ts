import { async, TestBed } from '@angular/core/testing';
import { DocumentsModule } from './documents.module';

describe('DocumentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DocumentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DocumentsModule).toBeDefined();
  });
});
