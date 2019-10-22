import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from '../..';

@Injectable({
  providedIn: 'root'
})
export class LayoutFacadeService {
  constructor(private http: HttpClient) {}

  public getAppRoutes$() {
    return this.http.get<Link[]>('assets/data/app-routes.json');
  }

  public getExternalLinks$() {
    return this.http.get<Link[]>('assets/data/external-links.json');
  }
}
