import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { Link } from './models/link.interface';

declare var gtag;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private http: HttpClient,
    private swUpdate: SwUpdate
  ) {}

  private readonly markdownHeader = new HttpHeaders({
    'Content-Type': 'text/markdown; charset=UTF-8'
  });

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
        filter(route => route.outlet === 'primary'),
        tap((route: ActivatedRoute) => this.sendToGtag(route)),
        mergeMap(route => route.data)
      )
      .subscribe(data => this.title.setTitle(data.title));
  }

  private sendToGtag(route: ActivatedRoute) {
    const metric = {
      page_title: route.snapshot.data.title,
      page_path: route.snapshot.url
    };
    gtag('event', 'page_view', metric);
  }

  public getLinks$() {
    return this.http.get<Link[]>('assets/links.json');
  }

  public getMarkdown$(url: string) {
    return this.http.get(url, {
      headers: this.markdownHeader,
      responseType: 'text'
    });
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
