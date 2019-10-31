import { RouteLink } from '@a-blue/blueprint/domain';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable()
export class DocumentationService {
  private documents: RouteLink[] = [
    {
      path: './assets/architecture.md',
      data: { caption: 'Architecture' }
    },
    {
      path: './assets/ROADMAP.md',
      data: { caption: 'Roadmap' }
    }
  ];
  constructor() {}

  getDocuments$(): Observable<RouteLink[]> {
    return of(this.documents);
  }
}
