import { RouteLink } from '@a-blue/blueprint/domain';
import { LayoutFacadeService } from '@a-blue/layout/domain';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'a-blue-layout-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
  @Input() title = '';
  appRoutes$: Observable<RouteLink[]>;
  externalLinks$: Observable<RouteLink[]>;

  constructor(private layoutFacadeService: LayoutFacadeService) {}

  ngOnInit() {
    this.appRoutes$ = this.layoutFacadeService.getAppRoutes$();
    this.externalLinks$ = this.layoutFacadeService.getExternalLinks$();
  }
}
