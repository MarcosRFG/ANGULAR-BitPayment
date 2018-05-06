import { AuthService } from './../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any;
  userError: any = false;
  passError: any = false;
  formError: any = false;
  @Output() loginSucess = new EventEmitter();

  constructor(private formBuilder : FormBuilder, private auth : AuthService) {
    this.form = this.formBuilder.group({
      user : ['', Validators.required],
      pass : ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  entrar(){
    this.verifyForm();

    if(this.formError == true){
      // erro
    }else{
      // form esta valido
      // falta implementar a verificacao se os dados estao corretos
      this.auth.initLogin();
      this.loginSucess.emit(true);
    }
  }

  verifyForm(){
    if(this.form.controls.user.status == 'INVALID'){
      this.userError = true;
    }else{
      this.userError = false;
    }
    
    if(this.form.controls.pass.status == 'INVALID'){
      this.passError = true;
    }else{
      this.passError = false;
    }

    if(this.userError == true || this.passError == true){
      this.formError = true;
    }else{
      this.formError = false;
    }
  }

  verifyChangeForm(input){
    if(this.form.controls.user.status == 'INVALID' && input == 'user'){
      this.userError = true;
    }
    if(this.form.controls.user.status == 'VALID' && input == 'user'){
      this.userError = false;
    }
    
    if(this.form.controls.pass.status == 'INVALID' && input == 'pass'){
      this.passError = true;
    }
    if(this.form.controls.pass.status == 'VALID' && input == 'pass'){
      this.passError = false;
    }

    if(this.userError == true || this.passError == true){
      this.formError = true;
    }else{
      this.formError = false;
    }
  }


}
