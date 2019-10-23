import { PwaService } from '@angular-blueprint/pwa';
import { RoutesService } from '@angular-blueprint/tracker';
import { Component } from '@angular/core';
@Component({
  selector: 'abs-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  public title = 'Angular-Blueprint';
  constructor(appService: RoutesService, pwa: PwaService) {
    appService.init();
    pwa.init();
  }
}
