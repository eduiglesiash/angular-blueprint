import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'layout-ui-top-bar',
  templateUrl: './top-bar.component.html',
  styles: [
    `
      section {
        display: flex;
        justify-content: space-between;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit() {}
}
