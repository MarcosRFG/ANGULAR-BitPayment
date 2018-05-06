import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLogged : string;
  constructor() { }

  initLogin(){
    sessionStorage.setItem('lgn', 'true');
  }

  verifyLogin(){
    this.isLogged = sessionStorage.getItem('lgn');

    if(this.isLogged == 'true'){
      return true;
    }else{
      return false;
    } 
  }

  logout(){
    sessionStorage.clear();
    window.location.href = '/index';
    return true;
  }

  clearSession(){
    sessionStorage.clear();
  }
}
