import { LayoutFeatureModule } from '@angular-blueprint/layout/feature';
import { PwaModule } from '@angular-blueprint/pwa';
import { TrackerModule } from '@angular-blueprint/tracker';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
//import { routes } from './routes';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { caption: 'Home', title: 'Blueprint' }
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule),
    data: { caption: 'Contact', title: 'Contact us' }
  },
  {
    path: 'roadmap',
    loadChildren: () =>
      import('./roadmap/roadmap.module').then(m => m.RoadmapModule),
    data: { caption: 'Roadmap', title: 'Feature Roadmap' }
  },
  {
    path: 'documentation',
    loadChildren: () =>
      import('./documentation/documentation.module').then(
        m => m.DocumentationModule
      ),
    data: { caption: 'Documentation', title: 'Architectural Documents' }
  }
];

const blueprintImports: any[] = [
  LayoutFeatureModule,
  PwaModule.forRoot({
    isProduction: environment.production
  }),
  TrackerModule.forRoot({
    isProduction: environment.production,
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
    LayoutFeatureModule,
    ...blueprintImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
