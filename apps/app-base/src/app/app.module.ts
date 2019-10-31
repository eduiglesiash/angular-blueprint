import { LayoutFeatureModule } from '@a-blue/layout/feature';
import { PwaModule } from '@a-blue/pwa';
import { TrackerModule } from '@a-blue/tracker';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'documentation',
    loadChildren: () =>
      import('./documentation/documentation.module').then(
        m => m.DocumentationModule
      )
  }
];

const blueprintImports: any[] = [
  LayoutFeatureModule,
  PwaModule.forRoot({
    isProduction: environment.production
  }),
  TrackerModule.forRoot({
    isProduction: environment.production,
    routes: routes,
    gTagId: environment.gTagId
  })
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
    ...blueprintImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
