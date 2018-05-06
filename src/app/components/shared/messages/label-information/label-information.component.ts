import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-information',
  templateUrl: './label-information.component.html',
  styleUrls: ['./label-information.component.css']
})
export class LabelInformationComponent implements OnInit {

  @Input() colorLabel : string = 'black';
  @Input() msgLabel : string = '';
  @Input() fonteLabel : string = '12px';

  constructor() { }

  ngOnInit() {
  }

}
