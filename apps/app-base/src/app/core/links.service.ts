import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from './models/link.interface';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  constructor(private http: HttpClient) {}

  public getLinks$() {
    return this.http.get<Link[]>('assets/links.json');
  }
}
