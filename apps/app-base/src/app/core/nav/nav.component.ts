import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Link } from '../models/link.interface';

@Component({
  selector: 'abs-nav',
  templateUrl: './nav.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  @Input() links: Link[];
  constructor() {}

  ngOnInit() {}
}
