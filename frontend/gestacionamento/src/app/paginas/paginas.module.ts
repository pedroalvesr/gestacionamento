import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginasComponent } from './paginas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatioComponent } from './patio/patio.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { EstacionamentoComponent } from './estacionamento/estacionamento.component';
import { TelefonePipe } from '../core/pipe/telefone.pipe';
import { CpfPipe } from '../core/pipe/cpf.pipe';

@NgModule({
  declarations: [
    PaginasComponent,
    DashboardComponent,
    PatioComponent,
    VeiculoComponent,
    EstacionamentoComponent,
    TelefonePipe,
    CpfPipe
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class PaginasModule { }
