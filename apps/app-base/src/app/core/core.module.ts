import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { ErrorHandlerService } from './error-handler.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    AsideComponent,
    FooterComponent
  ],
  imports: [CommonModule, RouterModule],
  providers: [{ provide: ErrorHandler, useClass: ErrorHandlerService }],
  exports: [HeaderComponent, NavComponent, AsideComponent, FooterComponent]
})
export class CoreModule {}
