import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'rolados-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  public isLogged: boolean;

  constructor(private router: Router,
              private toast: ToastrService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  Regresar() {
    this.router.navigate(['/principal']);
  }

  // tslint:disable-next-line: typedef
  Message(quizForm: NgForm) {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;
    if (name === '') {
      this.toast.error('El campo nombre esta vacio');
    }
    else if (email === '') {
      this.toast.error('El campo email esta vacio');
    }
    else if (message === '') {
      this.toast.error('El campo Mensaje esta vacio');
    }
    else {
      this.toast.success('Gracias por tu mensaje');
      this.Reset(quizForm);
    }
  }

  // tslint:disable-next-line: typedef
  Reset(quizForm?: NgForm) {
    if (quizForm != null) {
      quizForm.reset();
    }
  }

}
