import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Observable } from 'rxjs';
import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'a-blue-documents-markdown-viewer',
  templateUrl: './markdown-viewer.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownViewerComponent implements OnInit, OnChanges {
  @Input() url: string;
  markdownContent$: Observable<any>;

  constructor(private markdownService: MarkdownService) {}

  ngOnInit() {
    this.loadDocument();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadDocument();
  }

  private loadDocument() {
    this.markdownContent$ = this.markdownService.getMarkdown$(this.url);
  }
}
