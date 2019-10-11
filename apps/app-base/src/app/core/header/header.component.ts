import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'abs-header',
  templateUrl: './header.component.html',
  styles: [
    `
      section {
        display: flex;
        left: 0;
        justify-content: space-between;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit() {}
}
