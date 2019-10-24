import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'angular-blueprint-documents-markdown-viewer',
  templateUrl: './markdown-viewer.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownViewerComponent implements OnInit {
  @Input() url: string;
  markdownContent$: Observable<any>;

  constructor(private markdownService: MarkdownService) {}

  ngOnInit() {
    this.markdownContent$ = this.markdownService.getMarkdown$(this.url);
  }
}
