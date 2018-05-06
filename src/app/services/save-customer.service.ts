import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SaveCustomerService {
  payloadURL = 'http://localhost:3000/savecustomer'

  constructor(private http: Http) { }

  saveCustomer(){
    return this.http.get(this.payloadURL)
      .map(data =>{ 
        return data.status;     
      });
  }

}
