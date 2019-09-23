import { Component, OnInit } from '@angular/core';

import { Patio } from './../../core/entity/patio';
import { PatioService } from './../../core/services/patio.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'gestac-patio',
  templateUrl: './patio.component.html',
  styleUrls: ['./patio.component.scss']
})
export class PatioComponent implements OnInit {

  patio: Patio;
  msgSucesso = false;
  msgErro = false;

  constructor(private patioService: PatioService) {
    this.patio = new Patio();
  }

  ngOnInit() {
  }

  public salvarPatio() {
    this.patioService.salvarPatio(this.patio).subscribe((res) => {
      this.patio = new Patio();
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

}
