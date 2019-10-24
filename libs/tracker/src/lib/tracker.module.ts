import { CommonModule } from '@angular/common';
import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { GtagService } from './gtag.service';
import { TrackerConfig } from './models/tracker-config.class';
import { RoutesService } from './routes.service';
import { TrackerService } from './tracker.service';
@NgModule({
  imports: [CommonModule],
  providers: [{ provide: ErrorHandler, useClass: ErrorHandlerService }]
})
export class TrackerModule {
  // To Do:
  // config clientSide and production
  // receibe routes in forRoot
  // load metadata

  static forRoot(
    trackerConfig: TrackerConfig
  ): ModuleWithProviders<TrackerModule> {
    return {
      ngModule: TrackerModule,
      providers: [
        { provide: TrackerConfig, useValue: trackerConfig },
        {
          provide: TrackerService,
          deps: [TrackerConfig],
          useFactory: (trackerConfig2: TrackerConfig) =>
            trackerConfig.gTagId
              ? new GtagService(trackerConfig2.gTagId)
              : new TrackerService()
        }
      ]
    };
  }

  constructor(routesService: RoutesService) {
    routesService.init();
  }
}
