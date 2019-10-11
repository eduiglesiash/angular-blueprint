import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { Observable } from 'rxjs';
import { Link } from './core/models/link.interface';

@Component({
  selector: 'abs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Angular-Blueprint';
  public links$: Observable<Link[]>;
  constructor(private swUpdate: SwUpdate, private http: HttpClient) {
    this.checkVersionUpdates();
    this.loadLinks();
  }

  private checkVersionUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate();
      this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
        if (event.current.appData) {
          this.askToUpdateApp(event);
        }
      });
    }
  }

  private askToUpdateApp(event: UpdateAvailableEvent) {
    const appData: any = event.current.appData;
    let msg = `New version ${appData.version} available.`;
    msg += `${appData.changelog}.`;
    msg += 'Reaload now?';
    if (confirm(msg)) {
      window.location.reload();
    }
  }

  private loadLinks() {
    this.links$ = this.http.get<Link[]>('assets/links.json');
  }
}
