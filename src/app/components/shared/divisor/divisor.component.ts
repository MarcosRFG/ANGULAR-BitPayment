import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-divisor',
  templateUrl: './divisor.component.html',
  styleUrls: ['./divisor.component.css']
})
export class DivisorComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;
  @Input() marginTop: string;

  constructor() { }

  ngOnInit() {
  }

}
