import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBitcoinComponent } from './edit-bitcoin.component';

describe('EditBitcoinComponent', () => {
  let component: EditBitcoinComponent;
  let fixture: ComponentFixture<EditBitcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBitcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
