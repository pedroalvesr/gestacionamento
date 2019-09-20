import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginasComponent } from './paginas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatioComponent } from './patio/patio.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { EstacionamentoComponent } from './estacionamento/estacionamento.component';


@NgModule({
  declarations: [
    PaginasComponent,
    DashboardComponent,
    PatioComponent,
    VeiculoComponent,
    EstacionamentoComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule
  ]
})
export class PaginasModule { }
