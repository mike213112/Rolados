import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateInventoryComponent } from './intermediate-inventory.component';

describe('IntermediateInventoryComponent', () => {
  let component: IntermediateInventoryComponent;
  let fixture: ComponentFixture<IntermediateInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermediateInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediateInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
