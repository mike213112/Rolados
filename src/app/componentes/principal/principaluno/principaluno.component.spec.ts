import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalunoComponent } from './principaluno.component';

describe('PrincipalunoComponent', () => {
  let component: PrincipalunoComponent;
  let fixture: ComponentFixture<PrincipalunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
