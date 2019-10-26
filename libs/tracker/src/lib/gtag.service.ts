import { Injectable } from '@angular/core';
import { TrackerConfig } from './models/tracker-config.class';
import { TrackerService, TrackingEntry } from './tracker.service';

declare var gtag;

@Injectable({
  providedIn: 'root'
})
export class GtagService extends TrackerService {
  constructor(trackerConfig: TrackerConfig) {
    super();
    this.addScriptToDOM(trackerConfig.gTagId);
  }

  private addScriptToDOM(gTagId: string) {
    const remoteScript = document.createElement('script');
    remoteScript.type = 'text/javascript';
    remoteScript.async = true;
    remoteScript.src = `https://www.googletagmanager.com/gtag/js?id=${gTagId}`;
    document.head.appendChild(remoteScript);
    const localScript = document.createElement('script');
    localScript.type = 'text/javascript';
    localScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push( arguments ); }
    window.gtag = gtag;
    gtag( 'js', new Date() );
    gtag( 'config', '${gTagId}', { 'send_page_view': false } );`;
    document.head.appendChild(localScript);
  }

  writeError(error: TrackingEntry) {
    const metric = {
      event_category: error.origin,
      event_label: error.message,
      value: error.value
    };
    this.sendHit(error.type, metric);
  }

  writeEvent(event: TrackingEntry) {
    let metric: any;
    if (event.type === 'page_view') {
      metric = {
        page_title: event.origin,
        page_path: event.message,
        value: event.value
      };
    } else {
      metric = {
        event_category: event.origin,
        event_label: event.message,
        value: event.value
      };
    }
    this.sendHit(event.type, metric);
  }

  private sendHit(type: string, metric) {
    gtag('event', type, metric);
  }
}
