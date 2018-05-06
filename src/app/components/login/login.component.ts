import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetLoginService } from '../../services/get-login.service';
import { Login } from '../../models/Login';

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
  userReq: Login;
  loginIsOk: boolean = undefined;

  @Output() loginSucess = new EventEmitter();

  constructor(private formBuilder : FormBuilder, 
    private auth : AuthService,
    private SgetLogin: GetLoginService) {
    this.form = this.formBuilder.group({
      user : ['', Validators.required],
      pass : ['', Validators.required]
    });
   }

  ngOnInit() {
  }
Observable
  entrar(){
    this.verifyForm();

    if(this.formError == true){
      // erro
    }else{
      this.userReq = {
        "user": this.form.controls.user.value,
        "pass": this.form.controls.pass.value
      };
      this.SgetLogin.getLogin(this.userReq).subscribe(data =>{
        this.validLogin(data);
      });

    }
  }

  validLogin(returnBack){
    if(returnBack.status === 200 && returnBack._body === 'SUCESSO'){
      this.auth.initLogin();
      this.loginSucess.emit(true);
      this.loginIsOk = true;
    }else{
      this.loginIsOk = false;
    }
  }

  verifyForm(){
    this.loginIsOk = undefined;
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
    this.loginIsOk = undefined;
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
