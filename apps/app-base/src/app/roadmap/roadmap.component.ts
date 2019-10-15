import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppService } from '../core/app.service';

@Component({
  selector: 'abs-roadmap',
  templateUrl: './roadmap.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadmapComponent implements OnInit {
  public markdown$;
  constructor(private app: AppService) {}

  ngOnInit() {
    this.markdown$ = this.app.getMarkdown$('assets/ROADMAP.md');
  }
}
