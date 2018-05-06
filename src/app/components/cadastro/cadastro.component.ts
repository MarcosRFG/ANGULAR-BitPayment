import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  stage : number = 1;

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
  }

  AvancedForStage2(formReceived){
    this.stage = 2;
  }

  AvancedForRegister(formReceived){
    this.auth.initLogin();
    window.location.href = '/dashboard';
  }

  backStage(numStage){
    if(numStage < this.stage){
      this.stage = numStage;
    }
  }
}

