import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCustomerComponent } from './perfil-customer.component';

describe('PerfilCustomerComponent', () => {
  let component: PerfilCustomerComponent;
  let fixture: ComponentFixture<PerfilCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
