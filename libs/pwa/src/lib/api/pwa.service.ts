import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';
@Injectable()
export class PwaService {
  constructor(private appRef: ApplicationRef, private swUpdate: SwUpdate) {
    console.log('PwaService constructor');
    this.checkVersionUpdates();
    this.checkAvilable();
  }

  private checkVersionUpdates() {
    const appIsStable$ = this.appRef.isStable.pipe(
      first(isStable => isStable === true)
    );
    const everySixHours$ = interval(6 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
    everySixHoursOnceAppIsStable$.subscribe(() =>
      this.swUpdate.checkForUpdate()
    );
  }
  private checkAvilable() {
    this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
      if (event.current.appData) {
        this.askToUpdateApp(event);
      }
    });
  }
  private askToUpdateApp(event: UpdateAvailableEvent) {
    const appData: any = event.current.appData;
    const msg = `New version ${appData.version} available. Reaload now?`;
    if (confirm(msg)) {
      window.location.reload();
    }
  }
}
