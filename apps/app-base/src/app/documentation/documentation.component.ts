import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DocumentationService } from './documentation.service';

@Component({
  selector: 'abs-documentation',
  templateUrl: './documentation.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentationComponent implements OnInit {
  documents$: Observable<any[]>;
  currentDocument;
  constructor(private documentationService: DocumentationService) {}

  ngOnInit() {
    this.documents$ = this.documentationService
      .getDocuments$()
      .pipe(tap(documents => (this.currentDocument = documents[0])));
  }
  selectDocument(document) {
    this.currentDocument = document;
  }
}
