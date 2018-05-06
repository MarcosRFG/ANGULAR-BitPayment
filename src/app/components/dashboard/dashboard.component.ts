import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLogged: boolean;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isLogged = this.auth.verifyLogin();

    if(this.isLogged === true){
      console.log('esta logado');
    }else{
      console.log('esta DESlogado');
    }
  }

}
