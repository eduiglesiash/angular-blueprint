import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  private readonly markdownHeader = new HttpHeaders({
    'Content-Type': 'text/markdown; charset=UTF-8'
  });
  constructor(private http: HttpClient) {}

  public getMarkdown$(url: string) {
    return this.http.get(url, {
      headers: this.markdownHeader,
      responseType: 'text'
    });
  }
}
