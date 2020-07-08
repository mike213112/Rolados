import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Ultimo } from './../../models/productos/nuevamateria/ultimo';
import { Intermedio } from './../../models/productos/nuevamateria/intermedio';
import { Principal } from './../../models/productos/nuevamateria/principal';
import { Proveedor } from './../../models/productos/nuevos/proveedor';
import { Perfil } from './../../models/productos/nuevos/perfil';
import { Medida } from './../../models/productos/nuevos/medida';
import { Horario } from './../../models/productos/nuevos/horario';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  ListarMateriaPrima: AngularFireList<any>;
  ListarMateriaIntermedia: AngularFireList<any>;
  ListarMateriaFinal: AngularFireList<any>;

  ObtenerProveedores: AngularFireList<any>;
  ObtenerHorario: AngularFireList<any>;
  ObtenerPerfil: AngularFireList<any>;
  ObtenerMedidas: AngularFireList<any>;

  nuevohorario: Horario = new Horario();
  nuevamedida: Medida = new Medida();
  nuevoperfil: Perfil = new Perfil();
  nuevoproveedor: Proveedor = new Proveedor();
  selectNuevo: Principal = new Principal();
  selectIntermedio: Intermedio = new Intermedio();
  selectFinal: Ultimo = new Ultimo();

  constructor(private database: AngularFireDatabase) { }

  // tslint:disable-next-line: typedef
  getProveedores() {
    return this.ObtenerProveedores = this.database.list('Proveedores');
  }

  // tslint:disable-next-line: typedef
  getHorario() {
    return this.ObtenerHorario = this.database.list('Horarios');
  }

  // tslint:disable-next-line: typedef
  getPerfil() {
    return this.ObtenerPerfil = this.database.list('Perfiles');
  }

  // tslint:disable-next-line: typedef
  getMedidas() {
    return this.ObtenerMedidas = this.database.list('Medidas');
  }

  // tslint:disable-next-line: typedef
  getMateriaPrima() {
    return this.ListarMateriaPrima = this.database.list('MateriaPrima');
  }

  // tslint:disable-next-line: typedef
  getMateriaIntermedia() {
    return this.ListarMateriaIntermedia = this.database.list('MateriaIntermedia');
  }

  // tslint:disable-next-line: typedef
  getMateriaFinal() {
    return this.ListarMateriaFinal = this.database.list('MateriaFinal');
  }

  // tslint:disable-next-line: typedef
  Proveedores(proveedo: Proveedor) {
    this.ObtenerProveedores.push({
      proveedor: proveedo.proveedor
    });
  }

  // tslint:disable-next-line: typedef
  Horarios(nuevo: Horario) {
    this.ObtenerHorario.push({
      horario: nuevo.horario
    });
  }

  // tslint:disable-next-line: typedef
  Medidas(medida: Medida) {
    this.ObtenerMedidas.push({
      medida: medida.medida
    });
  }

  // tslint:disable-next-line: typedef
  Perfiles(perfil: Perfil) {
    this.ObtenerPerfil.push({
      perfil: perfil.perfil
    });
  }

  // tslint:disable-next-line: typedef
  MateriaPrima(prima: Principal) {
    this.ListarMateriaPrima.push({
      proveedor: prima.proveedor,
      peso: prima.peso,
      codigo: prima.codigo,
      envio: prima.envio
    });
  }

  // tslint:disable-next-line: typedef
  MateriaIntermedia(intermedia: Intermedio) {
    this.ListarMateriaIntermedia.push({
      fecha: intermedia.fecha,
      codigo: intermedia.codigo,
      peso: intermedia.peso
    });
  }

  // tslint:disable-next-line: typedef
  MateriaFinal(final: Ultimo) {
    this.ListarMateriaFinal.push({
      operador: final.operador,
      linea: final.linea,
      horario: final.horario,
      perfil: final.perfil,
      fecha: final.fecha,
      codigo: final.codigo,
      medidas: final.medidas
    });
  }

  // tslint:disable-next-line: typedef
  UpdateMateriaPrima(prima: Principal) {
    this.ListarMateriaPrima.update(prima.$id, {
      proveedor: prima.proveedor,
      peso: prima.peso,
      envio: prima.envio
    });
  }

  // tslint:disable-next-line: typedef
  UpdateMateriaIntermedia(intermedia: Intermedio) {
    this.ListarMateriaIntermedia.update(intermedia.$id, {
      fecha: intermedia.fecha,
      peso: intermedia.peso
    });
  }

  // tslint:disable-next-line: typedef
  UpdateMateriaFinal(final: Ultimo) {
    this.ListarMateriaFinal.update(final.$id, {
      operador: final.operador,
      linea: final.linea,
      horario: final.horario,
      perfil: final.perfil,
      fecha: final.fecha,
      codigo: final.codigo,
      medidas: final.medidas
    });
  }

  // tslint:disable-next-line: typedef
  DelectMateriaPrima($key: string) {
    this.ListarMateriaPrima.remove($key);
  }

  // tslint:disable-next-line: typedef
  DelectMateriaIntermedia($key: string) {
    this.ListarMateriaIntermedia.remove($key);
  }

  // tslint:disable-next-line: typedef
  DelectMateriaFinal($key: string) {
    this.ListarMateriaFinal.remove($key);
  }

}
