import { LayoutDomainModule } from '@a-blue/layout/domain';
import { LayoutUiModule } from '@a-blue/layout/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  imports: [CommonModule, LayoutUiModule, LayoutDomainModule],
  declarations: [AdminComponent],
  exports: [AdminComponent]
})
export class LayoutFeatureModule {}
