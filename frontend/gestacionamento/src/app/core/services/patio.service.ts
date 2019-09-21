import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class PatioService {

  HOME_API: string = Constants.HOME_API;

  constructor(private http: HttpClient) { }

  public salvarPatio(patio) {
    return this.http.post(`${this.HOME_API}/patio`, patio).pipe(take(1));
  }

  public buscarVagas() {
    return this.http.get(`${this.HOME_API}/patio/vagas`).pipe(take(1));
  }

  public buscarPatios() {
    return this.http.get(`${this.HOME_API}/patio`).pipe(take(1));
  }
}
