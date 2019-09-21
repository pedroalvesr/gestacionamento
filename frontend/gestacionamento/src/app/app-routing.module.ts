import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './paginas/login/login.component';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  { path: 'login/:to', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'paginas', loadChildren: './paginas/paginas.module#PaginasModule', canActivate: [LoginGuard] },
  // { path: '', redirectTo: '/paginas/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
