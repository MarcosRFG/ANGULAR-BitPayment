import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() msg : any = '';
  @Input() color : any = '';
  @Input() background : any = '';
  @Input() route : any = ''; 
  @Input() numBackStage : any = '';
  @Output() stage = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goRoute(){
    this.router.navigate([this.route])
  }

  returnChangeStage(){
    if(this.numBackStage != ''){
      this.stage.emit(this.numBackStage)
    }
  }

}
