import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaldosComponent } from './principaldos.component';

describe('PrincipaldosComponent', () => {
  let component: PrincipaldosComponent;
  let fixture: ComponentFixture<PrincipaldosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipaldosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
