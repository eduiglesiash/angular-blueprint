import { LayoutFacadeService, Link } from '@angular-blueprint/layout/domain';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'layout-feature-admin',
  templateUrl: './admin.component.html',
  styles: [
    `
      article {
        display: flex;
        flex-direction: column;
      }
      article > header {
        flex: none;
      }
      article > main {
        display: flex;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: auto;
        flex-direction: row;
        padding-top: 10px;
        padding-bottom: 10px;
        border-top-color: darkgray;
        border-top-style: solid;
        border-top-width: 1px;
        border-bottom-color: darkgray;
        border-bottom-style: solid;
        border-bottom-width: 1px;
      }

      article > main > section {
        flex: 1;
        flex-direction: column;
      }
      article > main > aside {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 12em;
      }
      article > main > nav {
        order: -1;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 12em;
      }

      article > footer {
        flex: none;
      }

      @media (max-width: 768px) {
        article > main {
          flex-direction: column;
        }
        article > main > aside {
          display: none;
        }
        article > main > nav {
          flex-basis: auto;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
  @Input() title = '';
  appRoutes$: Observable<Link[]>;
  externalLinks$: Observable<Link[]>;

  constructor(private layoutFacadeService: LayoutFacadeService) {}

  ngOnInit() {
    this.appRoutes$ = this.layoutFacadeService.getAppRoutes$();
    this.externalLinks$ = this.layoutFacadeService.getExternalLinks$();
  }
}
