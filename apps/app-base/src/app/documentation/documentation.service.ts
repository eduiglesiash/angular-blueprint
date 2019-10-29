import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DocumentationService {
  private documents: any[] = [
    {
      path: './assets/architecture.md',
      caption: 'Architecture'
    },
    {
      path: './assets/ROADMAP.md',
      caption: 'Roadmap'
    }
  ];
  constructor() {}

  getDocuments$(): Observable<any[]> {
    return of(this.documents);
  }
}
