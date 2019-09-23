import { Component, OnInit } from '@angular/core';

import { Veiculo } from './../../core/entity/veiculo';
import { Patio } from './../../core/entity/patio';
import { PatioService } from './../../core/services/patio.service';
import { VeiculoService } from './../../core/services/veiculo.service';

@Component({
  selector: 'gestac-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.scss']
})
export class VeiculoComponent implements OnInit {

  patios: Patio[] = [];
  veiculo: Veiculo;
  msgSucesso = false;
  msgErro = false;

  constructor(private veiculoService: VeiculoService,
    private patioService: PatioService) {
    this.veiculo = new Veiculo();
  }

  ngOnInit() {
    this.buscarPatios();
  }

  public salvarVeiculo() {
    console.log(this.veiculo);
    this.veiculoService.salvarVeiculo(this.veiculo).subscribe((resp) => {
      this.veiculo = new Veiculo();
      this.msgSucesso = true;
      setTimeout(() => {
        this.msgSucesso = false;
      }, 6000)
    }, error => {
      this.msgErro = true;
      setTimeout(() => {
        this.msgErro = false;
      }, 6000)
    });

  }

  public buscarPatios() {
    this.patioService.buscarPatios().subscribe((patios: Patio[]) => {
      this.patios = patios;
      console.log(this.patios);

    })
  }

}
