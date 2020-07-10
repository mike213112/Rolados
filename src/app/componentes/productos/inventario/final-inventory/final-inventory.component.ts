import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SesionService } from './../../../../services/login/sesion.service';
import { ConexionService } from './../../../../services/base/conexion.service';

import { Ultimo } from './../../../../models/productos/nuevamateria/ultimo';

@Component({
  selector: 'rolados-final-inventory',
  templateUrl: './final-inventory.component.html',
  styleUrls: ['./final-inventory.component.scss']
})
export class FinalInventoryComponent implements OnInit {

  ListarFinal: Ultimo[];
  public isLogged = false;

  constructor(private autenticar: SesionService,
              public finalSevice: ConexionService,
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
    this.finalSevice.getMateriaFinal()
      .snapshotChanges()
      .subscribe(item => {
        this.ListarFinal = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$id"] = element.key;
          this.ListarFinal.push(x as Ultimo);
        });
      });
  }

  onClickLogout() {
    this.autenticar.Logout();
    this.router.navigate(['/principal']);
  }

}
