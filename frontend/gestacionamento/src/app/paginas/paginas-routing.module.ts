import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginasComponent } from './paginas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatioComponent } from './patio/patio.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { EstacionamentoComponent } from './estacionamento/estacionamento.component';
import { LoginGuard } from '../core/guards/login.guard';


const routes: Routes = [
  {
    path: '', component: PaginasComponent, children: [
      { path: 'carros-estacionados', component: EstacionamentoComponent, canActivate: [LoginGuard] },
      { path: 'veiculo', component: VeiculoComponent, canActivate: [LoginGuard] },
      { path: 'patio', component: PatioComponent, canActivate: [LoginGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
