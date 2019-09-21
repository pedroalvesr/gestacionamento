import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { Constants } from './../util/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  HOME_API: string = Constants.HOME_API;
  usuarioAutenticado: boolean = false;

  constructor(private http: HttpClient,
    private route: Router) { }

  public login(usuario) {
    return this.http.post(`${this.HOME_API}/login`, usuario).subscribe((resp: boolean) => {
      console.log(resp);
      this.usuarioAutenticado = resp;
      this.route.navigate(['/pessoas/dashboard']);
    });
  }

  public novoUsuario(usuario) {
    return this.http.post(`${this.HOME_API}/login/novo`, usuario).pipe(take(1));
  }

  
  public loadAcessToken() {
    if (this.usuarioAutenticado == true) {
        return true;
      }
      return false;
  }

  public isLogado() {
    return this.loadAcessToken();
  }

  public logout(){
    this.usuarioAutenticado = false;
    this.route.navigate(["/login"]);
  }

}
