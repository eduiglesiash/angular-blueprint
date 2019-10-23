import { Injectable } from '@angular/core';

declare var gtag;

@Injectable({
  providedIn: 'root'
})
export class GtagService {
  constructor() {}

  public sendError(category: string, type: string, message: string) {
    const metric = {
      event_category: category,
      event_label: message,
      value: 1
    };
    this.sendHit(type, metric);
  }

  public sendPageView(title, path) {
    const metric = {
      page_title: title,
      page_path: path
    };
    this.sendHit('page_view', metric);
  }

  private sendHit(type: string, metric) {
    gtag('event', type, metric);
  }
}
