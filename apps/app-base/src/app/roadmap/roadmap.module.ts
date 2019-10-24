import { DocumentsModule } from '@angular-blueprint/documents';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadmapRoutingModule } from './roadmap-routing.module';
import { RoadmapComponent } from './roadmap.component';

const routes: Routes = [{ path: '', component: RoadmapComponent }];

@NgModule({
  declarations: [RoadmapComponent],
  imports: [
    CommonModule,
    DocumentsModule,
    RoadmapRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class RoadmapModule {}
