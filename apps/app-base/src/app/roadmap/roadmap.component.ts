import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MarkdownService } from '../core/markdown.service';

@Component({
  selector: 'abs-roadmap',
  templateUrl: './roadmap.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadmapComponent implements OnInit {
  public markdown$;
  constructor(private markdownService: MarkdownService) {}

  ngOnInit() {
    this.markdown$ = this.markdownService.getMarkdown$('assets/ROADMAP.md');
  }
}
