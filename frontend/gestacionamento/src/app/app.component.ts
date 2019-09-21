import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './core/services/login.service';

@Component({
  selector: 'gestac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestacionamento';

  islogado: boolean;

  constructor(
    private loginService: LoginService, 
    private route: Router) { }

  ngOnInit() {
    this.usuarioLogado();
    let logado = this.loginService.isLogado();
    if (!logado) {
      this.route.navigateByUrl('/');
      this.route.navigate(['login']);
    }
  }

  public usuarioLogado() {
    this.loginService.atualizacao.subscribe(logado => {
      this.islogado = logado;
    });
  }
}
