import { LayoutFeatureModule } from '@angular-blueprint/layout/feature';
import { PwaModule } from '@angular-blueprint/pwa';
import { TrackerModule } from '@angular-blueprint/tracker';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routes } from './routes';

const blueprintImports: any[] = [
  LayoutFeatureModule,
  PwaModule.forRoot({
    isProduction: environment.production
  }),
  TrackerModule
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    LayoutFeatureModule,
    ...blueprintImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
