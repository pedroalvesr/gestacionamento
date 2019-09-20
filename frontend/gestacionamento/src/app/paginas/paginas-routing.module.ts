import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginasComponent } from './paginas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatioComponent } from './patio/patio.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { EstacionamentoComponent } from './estacionamento/estacionamento.component';


const routes: Routes = [
  {
    path: '', component: PaginasComponent, children: [
      { path: 'carros-estacionados', component: EstacionamentoComponent },
      { path: 'veiculo', component: VeiculoComponent },
      { path: 'patio', component: PatioComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
