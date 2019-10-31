import { RouteLink } from '@a-blue/blueprint/domain';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutFacadeService {
  constructor(private http: HttpClient) {}

  public getAppRoutes$() {
    return this.http.get<RouteLink[]>('assets/data/app-routes.json');
  }

  public getExternalLinks$() {
    return this.http.get<RouteLink[]>('assets/data/external-links.json');
  }
}
