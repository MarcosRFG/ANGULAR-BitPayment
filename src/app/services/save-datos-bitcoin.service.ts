import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class SaveDatosBitcoinService {
  payloadURL = 'http://localhost:3000/saveDadosBitcoin';
  constructor(private http: Http) { }

  saveDatosBtc(req){
    return this.http.get(this.payloadURL).map(data =>{
      return data.status;
    })
  }


}
