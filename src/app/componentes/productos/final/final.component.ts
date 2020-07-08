import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { SesionService } from '../../../services/login/sesion.service';
import { ConexionService } from './../../../services/base/conexion.service';

import { Ultimo } from './../../../models/productos/nuevamateria/ultimo';
import { Medida } from './../../../models/productos/nuevos/medida';
import { Intermedio } from 'src/app/models/productos/nuevamateria/intermedio';
import { Perfil } from './../../../models/productos/nuevos/perfil';
import { Horario } from './../../../models/productos/nuevos/horario';
@Component({
  selector: 'rolados-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  ListarFinal: Ultimo[];
  ListarHorario: Horario[];
  ListarPerfil: Perfil[];
  ListarIntermedio: Intermedio[];
  ListarMedidas: Medida[];

  public isLogged = false;

  constructor(private autenticar: SesionService,
              public finalService: ConexionService,
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
    //
    this.finalService.getHorario()
      .snapshotChanges()
      .subscribe(item => {
        this.ListarHorario = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListarHorario.push(x as Horario);
        });
      });
    //
    this.finalService.getPerfil()
      .snapshotChanges()
      .subscribe(item => {
        this.ListarPerfil = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListarPerfil.push(x as Perfil);
        });
      });
    //
    this.finalService.getMateriaIntermedia()
      .snapshotChanges()
      .subscribe(item => {
        this.ListarIntermedio = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListarIntermedio.push(x as Intermedio);
        });
      });
    //
    this.finalService.getMedidas()
      .snapshotChanges()
      .subscribe(item => {
        this.ListarMedidas = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListarMedidas.push(x as Medida);
        });
      });
    //
    this.finalService.getMateriaFinal()
      .snapshotChanges()
      .subscribe(item => {
        this.ListarFinal = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.ListarFinal.push(x as Ultimo);
        });
      });
  }

  // tslint:disable-next-line: typedef
  onClickLogout() {
    this.autenticar.Logout();
    this.router.navigate(['/principal']);
  }

  // tslint:disable-next-line: typedef
  onSubmit(productForm: NgForm) {
    const operador = (<HTMLInputElement>document.getElementById('operador')).value;
    const linea = (<HTMLInputElement>document.getElementById('linea')).value;
    const horario = (<HTMLOptionElement>document.getElementById('horario')).value;
    const perfil = (<HTMLOptionElement>document.getElementById("perfil")).value;
    const fecha = (<HTMLInputElement>document.getElementById("fecha")).value;
    const codigo = (<HTMLOptionElement>document.getElementById("codigo")).value;
    const medidas = (<HTMLOptionElement>document.getElementById("medidas")).value;

    if (operador === '') {
      this.toast.error('El campo operador está vacio');
    }
    else if (linea === '') {
      this.toast.error('El campo linea está vacio');
    }
    else if (horario === 'Seleccione') {
      this.toast.error('No ha seleccionado ningún horario');
    }
    else if (perfil === 'Seleccione') {
      this.toast.error('No ha seleccionado ningún perfil');
    }
    else if (fecha === '') {
      this.toast.error('El campo fecha está vacio');
    }
    else if (codigo === 'Seleccione') {
      this.toast.error('No ha seleccionado ningún codigo');
    }
    else if (medidas === 'Seleccione') {
      this.toast.error('No ha seleccionado ninguna medidas');
    }
    else {
      this.finalService.MateriaFinal(productForm.value);
      this.resetForm(productForm);
      this.toast.success('Dato ingresado correctamente');
    }

  }

  // tslint:disable-next-line: typedef
  resetForm(productForm?: NgForm) {
    if (productForm != null) {
      productForm.reset();
      this.finalService.selectFinal = new Ultimo();
    }
  }

}
