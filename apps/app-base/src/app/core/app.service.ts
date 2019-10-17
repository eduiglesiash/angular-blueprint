import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router
} from '@angular/router';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { filter, map, tap } from 'rxjs/operators';
import { GtagService } from './gtag.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private activatedRoute: ActivatedRoute,
    private gtagService: GtagService,
    private router: Router,
    private swUpdate: SwUpdate,
    private title: Title
  ) {}

  public handleRouterEvents() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route: ActivatedRoute) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route: ActivatedRoute) => route.outlet === 'primary'),
        map((route: ActivatedRoute) => route.snapshot),
        tap((snapshop: ActivatedRouteSnapshot) =>
          this.gtagService.sendPageView(snapshop.data.title, snapshop.url)
        ),
        tap((snapshop: ActivatedRouteSnapshot) =>
          this.title.setTitle(snapshop.data.title)
        )
      )
      .subscribe();
  }

  public checkVersionUpdates() {
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
