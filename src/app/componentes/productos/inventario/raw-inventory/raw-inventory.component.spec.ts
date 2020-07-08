import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawInventoryComponent } from './raw-inventory.component';

describe('RawInventoryComponent', () => {
  let component: RawInventoryComponent;
  let fixture: ComponentFixture<RawInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
