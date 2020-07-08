import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalInventoryComponent } from './final-inventory.component';

describe('FinalInventoryComponent', () => {
  let component: FinalInventoryComponent;
  let fixture: ComponentFixture<FinalInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
