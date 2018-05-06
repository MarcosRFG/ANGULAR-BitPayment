import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged : boolean;
  _clearSession : boolean;

  @Input('clearSession')
    set clearSession(clearSession: boolean){
      this._clearSession = clearSession;
    }

  get clearSession(): boolean{
    return this._clearSession;
  }

  constructor(private router: Router, private auth : AuthService) { }

  ngOnInit() {
    this.isLogged = this.auth.verifyLogin();
  }

  exit(){
    this.auth.logout();
  }

}
