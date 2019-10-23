import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router
} from '@angular/router';
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
        tap((snapshot: ActivatedRouteSnapshot) =>
          this.gtagService.sendPageView(snapshot.data.title, this.router.url)
        ),
        tap((snapshot: ActivatedRouteSnapshot) =>
          this.title.setTitle(snapshot.data.title)
        )
      )
      .subscribe();
  }
}
