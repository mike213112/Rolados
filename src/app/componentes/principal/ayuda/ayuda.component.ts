import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rolados-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.scss']
})
export class AyudaComponent implements OnInit {

  public isLogged: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
