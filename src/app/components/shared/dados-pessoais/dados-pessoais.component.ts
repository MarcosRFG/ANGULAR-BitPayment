import { SaveCustomerService } from './../../../services/save-customer.service';
import { GetCustomerService } from './../../../services/get-customer.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Customer } from '../../../models/ICustomer'

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {
  @Input() buttonNext = 'Próximo';
  @Input() txtTitle = 'Meus Dados';
  @Input() loadData = false;
  @Input() routerBack = '';
  @Output() formSubmit: EventEmitter<any>  = new EventEmitter();
  @Output() saveWithSucess: EventEmitter<any>  = new EventEmitter();
  @Output() isChangeForm: EventEmitter<any>  = new EventEmitter();

  form_pt1: any = false;
  nameError : any = false;
  emailError : any = false;
  cpfError : any = false;
  telefoneError : any = false;
  formError : boolean;
  ReqCustomer : any;
  RespCustomer : Customer;

  constructor(private formBuilder: FormBuilder, 
      private SgetCustomer: GetCustomerService,
      private SsaveCustomer: SaveCustomerService
    ) {
    this.form_pt1 = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  ngOnInit() {
    if(this.loadData){
      this.loadCustomer();
    }

  }

  next(){
    this.verifyForm();

    if (this.formError == true){
      // formualrio ja trata o erro
    }else{
      // retornar se formulario salvou com sucesso

      if(this.loadData){
        this.saveCustomer();
      }else{
        this.formSubmit.emit(this.form_pt1.value);
      }
    }
  }

  verifyForm(input?){
    this.isChangeForm.emit(true);
    if (this.form_pt1.controls.name.status !== 'INVALID'){
      this.nameError = false;
    }else{
      this.nameError = true;
    }
    if (this.form_pt1.controls.email.status !== 'INVALID'){
      this.emailError = false;
    }else{
      this.emailError = true;
    }
    if (this.form_pt1.controls.cpf.status !== 'INVALID'){
      this.cpfError = false;    
    }else{
      this.cpfError = true;    
    }
    if (this.form_pt1.controls.telefone.status !== 'INVALID'){
      this.telefoneError = false;    
    }else{
      this.telefoneError = true;    
    }

    if(this.nameError == true || this.emailError == true || this.cpfError == true || this.telefoneError == true){
      this.formError = true;
    }else{
      this.formError = false;
    }
  }

  changeInputForm(input){
    this.isChangeForm.emit(true);
    if (this.form_pt1.controls.name.status === 'VALID' && input == 'name'){
      this.nameError = false;
    }
    if (this.form_pt1.controls.name.status === 'INVALID' && input == 'name'){
      this.nameError = true;
    }

    if (this.form_pt1.controls.email.status === 'VALID' && input == 'email'){
      this.emailError = false;
    }
    if (this.form_pt1.controls.email.status === 'INVALID' && input == 'email'){
      this.emailError = true;
    }

    if (this.form_pt1.controls.cpf.status === 'VALID'  && input == 'cpf'){
      this.cpfError = false;    
    }
    if (this.form_pt1.controls.cpf.status === 'INVALID' && input == 'cpf'){
      this.cpfError = true;    
    }

    if (this.form_pt1.controls.telefone.status === 'VALID' && input == 'telefone'){
      this.telefoneError = false;    
    }
    if (this.form_pt1.controls.telefone.status === 'INVALID' && input == 'telefone'){
      this.telefoneError = true;    
    }
  }

  loadCustomer(){
    this.ReqCustomer = {
      "id" : "jhsdfhsdfuihsdufhsd",
      "user" : "teste",
    }
    this.SgetCustomer.getCustomer(this.ReqCustomer).subscribe(data =>{
      this.RespCustomer = data;
      this.setForm();
    });
  }

  setForm(){
    this.form_pt1.controls['name'].setValue(this.RespCustomer.name);
    this.form_pt1.controls['email'].setValue(this.RespCustomer.email);
    this.form_pt1.controls['cpf'].setValue(this.RespCustomer.cpf);   
    this.form_pt1.controls['telefone'].setValue(this.RespCustomer.telefone);
  }

  saveCustomer(){
    this.ReqCustomer = {
      "id" : "jhsdfhsdfuihsdufhsd",
      "user" : "teste",
      "alter" : {
        "name": this.form_pt1.controls.name.value,
        "email": this.form_pt1.controls.email.value,
        "cpf": this.form_pt1.controls.cpf.value,
        "telefone": this.form_pt1.controls.telefone.value,
      }
    };

    this.SsaveCustomer.saveCustomer().subscribe(data =>{
      if(data == 200){
        this.saveWithSucess.emit(true);
        this.isChangeForm.emit(false);
      }else{
        this.saveWithSucess.emit(false);
      }
    });
  }

}
