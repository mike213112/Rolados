import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SesionService } from './../../../../services/login/sesion.service';
import { ConexionService } from './../../../../services/base/conexion.service';

import { Intermedio } from './../../../../models/productos/nuevamateria/intermedio';

@Component({
  selector: 'rolados-intermediate-inventory',
  templateUrl: './intermediate-inventory.component.html',
  styleUrls: ['./intermediate-inventory.component.scss']
})
export class IntermediateInventoryComponent implements OnInit {

  ListarIntemedia: Intermedio[];

  public isLogged = false;

  constructor(private login: SesionService,
              public intermediateService: ConexionService,
              private router: Router,
              private toast: ToastrService) { }

  ngOnInit(): void {
    //Si el usuario esta logeado
    this.login.ObtenerUsuario()
      .subscribe(auth => {
        if (auth) {
          this.isLogged = true;
        } else {
          this.isLogged = false;
        }
      });
    //Traer los datos
    this.intermediateService.getMateriaIntermedia()
      .snapshotChanges()
      .subscribe(item => {
        this.ListarIntemedia = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$id"] = element.key;
          this.ListarIntemedia.push(x as Intermedio)
        });
      });
  }

  // tslint:disable-next-line: typedef
  onClickLogout() {
    this.login.Logout();
    this.router.navigate(['/principal']);
  }

}
