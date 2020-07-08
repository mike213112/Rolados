import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ConexionService } from './../../../services/base/conexion.service';
import { ToastrService } from 'ngx-toastr';

import { SesionService } from '../../../services/login/sesion.service';
import { Intermedio } from '../../../models/productos/nuevamateria/intermedio';

@Component({
  selector: 'rolados-intermedio',
  templateUrl: './intermedio.component.html',
  styleUrls: ['./intermedio.component.scss']
})
export class IntermedioComponent implements OnInit {

  ListarIntermedia: Intermedio[];
  public isLogged: boolean;

  constructor(public intermedioConexion: ConexionService,
              private autenticar: SesionService,
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
    this.intermedioConexion.getMateriaIntermedia()
      .snapshotChanges()
      .subscribe(item => {
        this.ListarIntermedia = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListarIntermedia.push(x as Intermedio);
        });
      });
  }

  // tslint:disable-next-line: typedef
  onClickLogout() {
    this.autenticar.Logout();
    this.router.navigate(['/principal']);
  }

  // tslint:disable-next-line: typedef
  onSubmit(productForm) {
    const fecha = (<HTMLInputElement>document.getElementById('fecha')).value;
    const peso = (<HTMLInputElement>document.getElementById('peso')).value;
    const codigo = (<HTMLInputElement>document.getElementById('codigo')).value;

    if (fecha === '') {
      this.toast.error('No ha definido una fecha');
    }
    else if (peso === '') {
      this.toast.error('El campo peso está vacio');
    }
    else if (codigo === '') {
      this.toast.error('El campo codigo está vacio');
    }
    else {
      this.intermedioConexion.MateriaIntermedia(productForm.value);
      this.resetForm(productForm);
      this.toast.success('Dato ingresado correctamente');
    }
  }

  resetForm(productForm?: NgForm) {
    if (productForm != null) {
      productForm.reset();
      this.intermedioConexion.selectIntermedio = new Intermedio();
    }
  }

}
