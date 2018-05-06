import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  showModal = 'none';

  @Input() msg: string = '';

  constructor() { }

  ngOnInit() {
    this.showModal = 'block';
  }

  closeModal(){
    this.showModal = 'none'
  }
}
 