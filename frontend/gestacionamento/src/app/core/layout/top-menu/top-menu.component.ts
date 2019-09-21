import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gestac-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  pessoa: any = {
    nome: 'Pedro Ribeiro',
    cargo: 'Gerente'
  };
  imagem: any;
  username: any;

  constructor() { }

  ngOnInit() {
  }

}
