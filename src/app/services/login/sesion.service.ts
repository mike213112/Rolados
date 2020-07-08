import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(public autenticar: AngularFireAuth) { }

  Login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.autenticar.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          erro => reject(erro));
    });
  }

  ObtenerUsuario() {
    return this.autenticar.authState.pipe(map(auth => auth));
  }

  Logout() {
    return this.autenticar.auth.signOut();
  }

}
