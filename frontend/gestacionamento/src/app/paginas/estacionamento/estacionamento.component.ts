import { Component, OnInit } from '@angular/core';

import { EstacionamentoService } from './../../core/services/estacionamento.service';

@Component({
  selector: 'gestac-estacionamento',
  templateUrl: './estacionamento.component.html',
  styleUrls: ['./estacionamento.component.scss']
})
export class EstacionamentoComponent implements OnInit {

  estacionamento: any = [];

  constructor(private estService: EstacionamentoService) { }

  ngOnInit() {
    this.buscarVagas();
  }

  public buscarVagas() {
    this.estService.buscarVagas().subscribe((est) => {
      this.estacionamento = est;
    });
  }

  public custoEstacionamento(estacionamento) {
    this.estService.custoEstacionamento(estacionamento).subscribe(() => {
      this.buscarVagas();
    });
  }

}
