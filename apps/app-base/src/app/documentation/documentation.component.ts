import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'abs-documentation',
  templateUrl: './documentation.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentationComponent implements OnInit {
  documents: any[] = [
    {
      path: './assets/architecture.md',
      caption: 'Architecture'
    },
    {
      path: './assets/ROADMAP.md',
      caption: 'Roadmap'
    }
  ];
  currentDocument = this.documents[0];
  constructor() {}

  ngOnInit() {}
  selectDocument(document) {
    console.log({ document });
    this.currentDocument = document;
  }
}
