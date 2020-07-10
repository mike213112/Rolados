import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SesionService } from './../../../services/login/sesion.service';

@Component({
  selector: 'rolados-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private login: SesionService,
              private router: Router,
              private toast: ToastrService) { }

  ngOnInit(): void {}

  onSubmitLogin() {
    const mail = (<HTMLInputElement>document.getElementById('email')).value;
    const pass = (<HTMLInputElement>document.getElementById('password')).value;
    if (mail === '') {
      this.toast.error('El campo email está vacio');
    } else if (pass === '') {
      this.toast.error('El campo password está vacio');
    } else {
      this.login
        .Login(this.email, this.password)
        .then(() => {
          this.router.navigate(['/user/principal']);
          this.toast.success('Bienvenido');
        })
        .catch(() => {
          this.router.navigate(['/user/login']);
          this.toast.error('Sus credenciales son incorrectas');
        });
    }
  }

  // tslint:disable-next-line: typedef
  Regresar() {
    this.router.navigate(['/principal']);
  }

}
