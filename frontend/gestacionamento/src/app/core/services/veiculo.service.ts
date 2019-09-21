import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { Constants } from './../util/constants';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  HOME_API: string = Constants.HOME_API;

  constructor(private http: HttpClient) { }

  public salvarVeiculo(veiculo) {
    return this.http.post(`${this.HOME_API}/veiculo`, veiculo).pipe(take(1));
  }
}
