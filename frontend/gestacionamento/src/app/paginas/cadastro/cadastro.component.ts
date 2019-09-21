import { Component, OnInit } from '@angular/core';

import { LoginService } from './../../core/services/login.service';
import { Usuario } from './../../core/entity/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'gestac-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private loginService: LoginService,
    private route: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  novoUsuario() {
    this.loginService.novoUsuario(this.usuario).subscribe(() => {
      this.route.navigate(["/login"]);
    });
  }

}
