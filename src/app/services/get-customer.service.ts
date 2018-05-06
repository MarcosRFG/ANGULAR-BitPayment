import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class GetCustomerService {
  payloadURL = 'http://localhost:3000/getcustomer';

  constructor(public http: Http) { }

  public getCustomer(customer){
    return this.http.get(this.payloadURL)
      .map(res => res.json());
  }

}
