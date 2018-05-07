import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLogged: boolean;
  perfilCustomer: boolean;
  perfilCompany: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isLogged = this.auth.verifyLogin();
    this.perfilCustomer = true;

    if(this.isLogged === true){
      console.log('esta logado');
    }else{
      console.log('esta DESlogado');
    }
  }

}
