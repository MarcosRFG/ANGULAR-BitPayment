import { OnInit, Injectable, } from '@angular/core';
import { CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class GuardRouter implements CanActivate {
  isLogged: boolean;
  constructor(private auth: AuthService){}

  canActivate() {
    this.isLogged = this.auth.verifyLogin();

    if(this.isLogged === true){
      return true;
    }else{
      this.auth.logout();
      return false;
    }
  }
}