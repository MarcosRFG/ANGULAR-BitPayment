import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosResidencialComponent } from './dados-residencial.component';

describe('DadosResidencialComponent', () => {
  let component: DadosResidencialComponent;
  let fixture: ComponentFixture<DadosResidencialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosResidencialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosResidencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
