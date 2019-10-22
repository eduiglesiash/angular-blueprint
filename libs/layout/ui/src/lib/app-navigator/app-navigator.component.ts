import { Link } from '@angular-blueprint/layout/domain';
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
  @Input() appRoutes: Link[];
  constructor() {}

  ngOnInit() {}
}
