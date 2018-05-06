import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() private msg: string = '';
  @Input() private decoration: string = 'none';
  @Input() private colorDefault: string = '#000';
  @Input() private colorHover: string = '#000';
  @Input() private colorSelected: string = '#000';
  
  sizeBold
  colorMsg: string;
  textDecoration: string;

  constructor() { }

  ngOnInit() {
    this.colorMsg = this.colorDefault;
    this.textDecoration = 'none';

  }

  changeStyle(event){
    if(event.type == 'mouseover'){
      this.colorMsg = this.colorHover;
      this.textDecoration = this.decoration;
    }else{
      this.colorMsg = this.colorDefault;
      this.textDecoration = 'none';
    }
  }
}
