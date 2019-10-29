import { RouteLink } from '@angular-blueprint/blueprint/domain';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
@Component({
  selector: 'layout-ui-app-navigator',
  templateUrl: './app-navigator.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavigatorComponent implements OnInit {
  @Input() appRoutes: RouteLink[];
  constructor() {}

  ngOnInit() {}
}
