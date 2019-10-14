import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Link } from '../models/link.interface';

@Component({
  selector: 'abs-aside',
  templateUrl: './aside.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideComponent implements OnInit {
  @Input() externalLinks: Link[];
  constructor() {}

  ngOnInit() {}
}
