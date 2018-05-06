import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBitcoinComponent } from './dados-bitcoin.component';

describe('DadosBitcoinComponent', () => {
  let component: DadosBitcoinComponent;
  let fixture: ComponentFixture<DadosBitcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosBitcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
