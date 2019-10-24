import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PwaConfig } from './models/pwa-config.class';
import { PwaService } from './pwa.service';
@NgModule({
  imports: [CommonModule]
})
export class PwaModule {
  static forRoot(pwaConfig: PwaConfig): ModuleWithProviders<PwaModule> {
    return {
      ngModule: PwaModule,
      providers: [{ provide: PwaConfig, useValue: pwaConfig }]
    };
  }
  constructor(pwa: PwaService) {
    pwa.init();
  }
}
