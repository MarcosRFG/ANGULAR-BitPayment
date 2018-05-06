import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GetDatosBitcoinService {
  payloadURL = 'http://localhost:3000/getDadosBitcoin';
  constructor(private http: Http) { }

  getDatosBtc(req){
    return this.http.get(this.payloadURL).map(res =>{
      return res.json();
    })
  }

}
