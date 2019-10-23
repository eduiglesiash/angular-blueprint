import { LayoutFeatureModule } from '@angular-blueprint/layout/feature';
import { PwaModule } from '@angular-blueprint/pwa';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { routes } from './routes';

// export const routes: Link[] = [
// ];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    LayoutFeatureModule,
    PwaModule.forRoot({
      isProduction: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
