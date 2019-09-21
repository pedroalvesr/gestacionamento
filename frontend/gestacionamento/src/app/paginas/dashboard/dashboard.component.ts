import { Component, OnInit } from '@angular/core';

import { PatioService } from './../../core/services/patio.service';

@Component({
  selector: 'gestac-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  vagas = {};

  constructor(private patioService: PatioService) { }

  ngOnInit() {
    this.patioService.buscarVagas().subscribe((totalVagas) => {
      this.vagas = totalVagas;
    });

  }

}
