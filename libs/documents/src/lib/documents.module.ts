import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownViewerComponent } from './markdown-viewer/markdown-viewer.component';
@NgModule({
  imports: [CommonModule, MarkdownModule.forChild()],
  declarations: [MarkdownViewerComponent],
  exports: [MarkdownViewerComponent]
})
export class DocumentsModule {}
