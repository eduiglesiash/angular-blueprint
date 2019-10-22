import { LayoutDomainModule } from '@angular-blueprint/layout/domain';
import { LayoutUiModule } from '@angular-blueprint/layout/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  imports: [CommonModule, LayoutUiModule, LayoutDomainModule],
  declarations: [AdminComponent],
  exports: [AdminComponent]
})
export class LayoutFeatureModule {}
