import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gestac-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pessoa: any = {
    nome: 'Pedro Ribeiro',
    cargo: 'Analista de Desenvolvimento'
  };
  imagem: any;
  
  constructor() { }

  ngOnInit() {
  }

}
