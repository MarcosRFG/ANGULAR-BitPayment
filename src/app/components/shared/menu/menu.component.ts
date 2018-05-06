import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLogged: boolean;
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

  goHome(){
    this.router.navigate(['/dashboard']);
  }

  goEditPerfil(){
    this.router.navigate(['/editperfil']);
  }

  goEditBitcoin(){
    this.router.navigate(['/editbitcoin']);
  }
}
