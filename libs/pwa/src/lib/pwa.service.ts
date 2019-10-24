import { isPlatformBrowser } from '@angular/common';
import { ApplicationRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';
import { PwaConfig } from './models/pwa-config.class';
@Injectable({
  providedIn: 'root'
})
export class PwaService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private pwaConfig: PwaConfig,
    private appRef: ApplicationRef,
    private swUpdate: SwUpdate
  ) {}

  init() {
    console.log('initializing: PwaService', this.pwaConfig);
    if (isPlatformBrowser(this.platformId) && this.pwaConfig.isProduction) {
      this.checkVersionUpdates();
      this.subscribeToAvailableVersions();
    }
  }

  private checkVersionUpdates() {
    const appIsStable$ = this.appRef.isStable.pipe(
      first(isStable => isStable === true)
    );
    const everySixHours$ = interval(6 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
    everySixHoursOnceAppIsStable$.subscribe(() => {
      if (this.swUpdate.isEnabled) {
        this.swUpdate.checkForUpdate();
      }
    });
  }
  private subscribeToAvailableVersions() {
    this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
      if (event.current.appData) {
        this.askUserToUpdateApp(event);
      }
    });
  }
  private askUserToUpdateApp(event: UpdateAvailableEvent) {
    const appData: any = event.current.appData;
    const msg = `New version ${appData.version} available. Reaload now?`;
    if (confirm(msg)) {
      window.location.reload();
    }
  }
}
