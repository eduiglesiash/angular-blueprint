import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavigatorComponent } from './app-navigator/app-navigator.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ExternalLinksComponent } from './external-links/external-links.component';
import { LegalCreditsComponent } from './legal-credits/legal-credits.component';
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TopBarComponent, AppNavigatorComponent, ExternalLinksComponent, LegalCreditsComponent],
  exports: [TopBarComponent, AppNavigatorComponent, ExternalLinksComponent, LegalCreditsComponent]
})
export class LayoutUiModule {}
