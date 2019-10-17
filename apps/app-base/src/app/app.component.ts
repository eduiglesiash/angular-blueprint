import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './core/app.service';
import { Link } from './core/models/link.interface';
import { routes } from './routes';

@Component({
  selector: 'abs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Angular-Blueprint';
  public links$: Observable<Link[]>;
  public routes: Link[] = routes;
  constructor(appService: AppService) {
    this.links$ = appService.getLinks$();
    appService.checkVersionUpdates();
    appService.setDynamicTitle();
  }
}
