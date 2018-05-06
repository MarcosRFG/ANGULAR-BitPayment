import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dados-residencial',
  templateUrl: './dados-residencial.component.html',
  styleUrls: ['./dados-residencial.component.css']
})
export class DadosResidencialComponent implements OnInit {
  @Input() buttonNext = 'Próximo';
  @Output() formSubmit = new EventEmitter();
  form : any;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      cep: ['', Validators.required],
      rua: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  next(formReceived){
    if (formReceived.status === 'INVALID'){
      this.verifyForm(formReceived);
      console.log('invalido', formReceived);
    }else{
      console.log('valido')
      this.formSubmit.emit(formReceived.value);
    }
  }
  verifyForm(form){
    if (form.controls.cep.status === 'INVALID'){
      console.log('cep invalido')
    }
    if (form.controls.rua.status === 'INVALID'){
      console.log('rua invalido')
    }
    if (form.controls.bairro.status === 'INVALID'){
      console.log('bairro invalido')
    }
    if (form.controls.numero.status === 'INVALID'){
      console.log('numero invalido')
    }
    if (form.controls.complemento.status === 'INVALID'){
      console.log('complemento invalido')
    }
  }

}
