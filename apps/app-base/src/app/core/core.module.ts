import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [HeaderComponent, NavComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, NavComponent]
})
export class CoreModule { }
