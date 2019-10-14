import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent, AsideComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, NavComponent, AsideComponent, FooterComponent]
})
export class CoreModule {}
