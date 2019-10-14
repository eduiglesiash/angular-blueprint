import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'abs-nav',
  templateUrl: './nav.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  @Input() appRoutes: any[];
  constructor() {}

  ngOnInit() {}
}
