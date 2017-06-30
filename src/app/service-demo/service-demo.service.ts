import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/Rx'

@Injectable()
export class ServiceDemoService {
  url: string;

  constructor(private http: Http) {
    this.url = 'https://httpbin.org/get';
  }


  getData() {
    return this.http.get(this.url).map(res => res.json())
  }

  getData2() {
    return Observable.interval(1000);
  }

}
