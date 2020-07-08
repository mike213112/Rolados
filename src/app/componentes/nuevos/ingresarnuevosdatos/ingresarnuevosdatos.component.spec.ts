import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarnuevosdatosComponent } from './ingresarnuevosdatos.component';

describe('IngresarnuevosdatosComponent', () => {
  let component: IngresarnuevosdatosComponent;
  let fixture: ComponentFixture<IngresarnuevosdatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarnuevosdatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarnuevosdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
