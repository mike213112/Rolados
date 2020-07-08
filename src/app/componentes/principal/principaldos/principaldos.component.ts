import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SesionService } from '../../../services/login/sesion.service';

@Component({
  selector: 'rolados-principaldos',
  templateUrl: './principaldos.component.html',
  styleUrls: ['./principaldos.component.scss']
})
export class PrincipaldosComponent implements OnInit {

  constructor(private login: SesionService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onClickLogout() {
    this.login.Logout();
    this.router.navigate(['/principal']);
  }

}
