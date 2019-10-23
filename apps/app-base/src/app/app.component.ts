import { PwaService } from '@angular-blueprint/pwa';
import { Component } from '@angular/core';
import { AppService } from './core/app.service';
@Component({
  selector: 'abs-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  public title = 'Angular-Blueprint';
  constructor(appService: AppService, pwa: PwaService) {
    appService.handleRouterEvents();
    pwa.init();
  }
}
