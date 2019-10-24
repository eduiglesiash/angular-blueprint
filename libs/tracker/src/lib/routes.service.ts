import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router
} from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { TrackerService } from './tracker.service';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  constructor(
    private activatedRoute: ActivatedRoute,
    private trackerService: TrackerService,
    private router: Router,
    private title: Title
  ) {}

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
        map((route: ActivatedRoute) => route.snapshot),
        tap((snapshot: ActivatedRouteSnapshot) =>
          this.trackerService.writeEvent({
            origin: snapshot.data.title,
            type: 'page_view',
            message: this.router.url
          })
        ),
        tap((snapshot: ActivatedRouteSnapshot) =>
          this.title.setTitle(snapshot.data.title)
        )
      )
      .subscribe();
  }
}
