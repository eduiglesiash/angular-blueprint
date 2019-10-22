import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule],
  providers: [{ provide: ErrorHandler, useClass: ErrorHandlerService }],
  exports: []
})
export class CoreModule {}
