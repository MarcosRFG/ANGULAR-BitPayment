import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operator/map';

@Injectable()
export class GetLoginService {
  payloadURL = 'http://localhost:3000/getLogin';
  constructor(private http:Http) { }

  getLogin(req){
    let params: URLSearchParams = new URLSearchParams();

    return this.http.get(this.payloadURL+'/'+req.user+'/'+req.pass)
      .map(res =>{
       return res;
    });
  }

}
