import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelInformationComponent } from './label-information.component';

describe('LabelInformationComponent', () => {
  let component: LabelInformationComponent;
  let fixture: ComponentFixture<LabelInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
