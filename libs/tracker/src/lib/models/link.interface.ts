import { Route } from '@angular/compiler/src/core';

export interface Link extends Route {
  path: string;
  data: {
    caption: string;
    title?: string;
  };
}
