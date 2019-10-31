import { DocumentsModule } from '@a-blue/documents';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { DocumentationService } from './documentation.service';

const routes: Routes = [{ path: '', component: DocumentationComponent }];

@NgModule({
  declarations: [DocumentationComponent],
  imports: [
    CommonModule,
    DocumentsModule,
    DocumentationRoutingModule,
    RouterModule.forChild(routes)
  ],
  providers: [DocumentationService]
})
export class DocumentationModule {}
