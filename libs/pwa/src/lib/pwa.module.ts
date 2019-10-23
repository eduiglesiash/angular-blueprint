import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PwaService } from './api/pwa.service';

@NgModule({
  imports: [CommonModule]
})
export class PwaModule {
  // static forRoot(): ModuleWithProviders {
  //   const providers = [];
  //   if (true) {
  //     providers.push(PwaService);
  //   }
  //   return {
  //     ngModule: PwaModule,
  //     providers: providers
  //   };
  // }
  public static forRoot(): ModuleWithProviders {
    const providers = [{ provide: PwaService, useClass: PwaService }];
    return { ngModule: PwaModule, providers: providers };
  }
}
