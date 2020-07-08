import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SesionService } from './../../../../services/login/sesion.service';
import { ConexionService } from './../../../../services/base/conexion.service';

import { Principal } from './../../../../models/productos/nuevamateria/principal';

@Component({
  selector: 'rolados-raw-inventory',
  templateUrl: './raw-inventory.component.html',
  styleUrls: ['./raw-inventory.component.scss']
})
export class RawInventoryComponent implements OnInit {

  ListarPrima: Principal[];
  public isLogged = false;

  constructor(private autenticar: SesionService,
              public primaSevice: ConexionService,
              private router: Router,
              private toast: ToastrService) { }

  ngOnInit(): void {
    this.autenticar.ObtenerUsuario().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });
    this.primaSevice.getMateriaPrima()
      .snapshotChanges()
      .subscribe(item => {
        this.ListarPrima = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$id"] = element.key;
          this.ListarPrima.push(x as Principal);
        });
      });
  }

  onClickLogout() {
    this.autenticar.Logout();
    this.router.navigate(['/principal']);
  }

}
