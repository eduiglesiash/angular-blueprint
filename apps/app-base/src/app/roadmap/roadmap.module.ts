import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { RoadmapRoutingModule } from './roadmap-routing.module';
import { RoadmapComponent } from './roadmap.component';

const routes: Routes = [{ path: '', component: RoadmapComponent }];

@NgModule({
  declarations: [RoadmapComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    RoadmapRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class RoadmapModule {}
