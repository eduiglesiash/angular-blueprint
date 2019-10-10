import { Component } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
  selector: 'abs-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  public title = 'Angular-Blueprint';

  constructor(private swUpdate: SwUpdate) {
    this.checkVersionUpdates();
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
}
