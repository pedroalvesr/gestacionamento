import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

import { Constants } from './../util/constants';

@Injectable({
  providedIn: 'root'
})
export class EstacionamentoService {

  HOME_API: string = Constants.HOME_API;

  constructor(private http: HttpClient) { }

  public buscarVagas() {
    return this.http.get(`${this.HOME_API}/total/vagas`).pipe(take(1));
  }
}
