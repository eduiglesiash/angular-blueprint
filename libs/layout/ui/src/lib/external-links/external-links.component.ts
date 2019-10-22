import { Link } from '@angular-blueprint/layout/domain';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
@Component({
  selector: 'layout-ui-external-links',
  templateUrl: './external-links.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalLinksComponent implements OnInit {
  @Input() externalLinks: Link[];
  constructor() {}

  ngOnInit() {}
}
