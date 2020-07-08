import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rolados-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  public isLogged: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
