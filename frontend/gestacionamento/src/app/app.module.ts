import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './core/layout/top-menu/top-menu.component';
import { MenuComponent } from './core/layout/menu/menu.component';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    MenuComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
