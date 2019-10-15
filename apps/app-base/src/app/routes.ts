import { Link } from './core/models/link.interface';
export const routes: Link[] = [
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
  }
];
