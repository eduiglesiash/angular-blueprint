import { RouteLink } from '@angular-blueprint/blueprint/domain';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { TrackerService } from './tracker.service';
@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  private appRoutes: RouteLink[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private trackerService: TrackerService,
    private router: Router,
    private title: Title,
    private http: HttpClient
  ) {
    this.http.get<RouteLink[]>('assets/data/app-routes.json').subscribe({
      next: data => (this.appRoutes = data)
    });
  }

  init() {
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
        tap(() => {
          const path = this.router.url;
          const appRoute = this.appRoutes.find(r => r.path === path);
          if (appRoute) {
            this.trackerService.writeEvent({
              origin: appRoute.data.title,
              type: 'page_view',
              message: this.router.url
            });
            this.title.setTitle(appRoute.data.title);
          } else {
            this.trackerService.writeEvent({
              origin: 'RoutesService',
              type: 'warning',
              message: `${path} not found in ${JSON.stringify(this.appRoutes)}`
            });
          }
        })
      )
      .subscribe();
  }
}
