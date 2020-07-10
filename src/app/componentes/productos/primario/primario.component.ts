import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { Principal } from '../../../models/productos/nuevamateria/principal';
import { Proveedor } from '../../../models/productos/nuevos/proveedor';

import { SesionService } from '../../../services/login/sesion.service';
import { ConexionService } from '../../../services/base/conexion.service';

@Component({
  selector: 'rolados-primario',
  templateUrl: './primario.component.html',
  styleUrls: ['./primario.component.scss']
})
export class PrimarioComponent implements OnInit {

  ListarProveedores: Proveedor[];
  ListarMateria: Principal[];
  
  public isLogged: boolean;
  public email: string;

  constructor(public conexion: ConexionService,
              private autenticar: SesionService,
              private router: Router,
              private toast: ToastrService) { }

  ngOnInit(): void {
    //Autenticar si el usuario esta logueado
    this.autenticar.ObtenerUsuario().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
        this.email = auth.email;
      } else {
        this.isLogged = false;
      }
    });
    //Ingresar un nuevo Dato
    this.conexion.getProveedores()
      .snapshotChanges()
      .subscribe(item => {
        this.ListarProveedores = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListarProveedores.push(x as Proveedor);
        });
      });
    //Extraer Dato de la Base
    this.conexion.getMateriaPrima()
      .snapshotChanges()
      .subscribe(item => {
        this.ListarMateria = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListarMateria.push(x as Principal);
        });
      });
  }

  // tslint:disable-next-line: typedef
  onClickLogout() {
    this.autenticar.Logout();
    this.router.navigate(['/principal']);
  }

  // tslint:disable-next-line: typedef
  onSubmit(myform: NgForm) {
    const proveedor1 = (document.getElementById('provedor') as HTMLOptionElement).value;
    const peso = (<HTMLInputElement>document.getElementById('peso')).value;
    const codigo = (<HTMLInputElement>document.getElementById('codigo')).value;
    const envio = (<HTMLInputElement>document.getElementById("envio")).value;

    if (proveedor1 === 'Seleccione') {
      this.toast.error('No ha seleccionado ningún proveedor');
    }
    else if (peso === '') {
      this.toast.error('El campo peso está vacio');
    }
    else if (codigo === '') {
      this.toast.error('El campo codigo está vacio');
    }
    else if (envio === '') {
      this.toast.error('El campo envio está vacio');
    }
    else {
      this.conexion.MateriaPrima(myform.value);
      this.resetForm(myform);
      this.toast.success('Datos ingresados correctamente');
    }
  }

  // tslint:disable-next-line: typedef
  resetForm(myform?: NgForm) {
    if (myform != null) {
      myform.reset();
      this.conexion.selectNuevo = new Principal();
    }
  }

}
