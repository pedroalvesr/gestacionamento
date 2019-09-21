import { Usuario } from './../../core/entity/usuario';
import { Component, OnInit } from '@angular/core';

import { LoginService } from './../../core/services/login.service';

@Component({
  selector: 'gestac-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private loginService: LoginService) {
    this.usuario = new Usuario();
  }

  ngOnInit() { }

  public login() { 
    this.loginService.login(this.usuario);
  }

}
