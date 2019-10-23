import { async, TestBed } from '@angular/core/testing';
import { TrackerModule } from './tracker.module';

describe('TrackerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TrackerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TrackerModule).toBeDefined();
  });
});
