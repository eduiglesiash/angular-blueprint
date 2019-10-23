import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PwaConfig } from './models/pwa-config.class';

@NgModule({
  imports: [CommonModule]
})
export class PwaModule {
  public static forRoot(pwaConfig: PwaConfig): ModuleWithProviders<PwaModule> {
    return {
      ngModule: PwaModule,
      providers: [{ provide: PwaConfig, useValue: pwaConfig }]
    };
  }
}
