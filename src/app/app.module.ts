import { SaveCustomerService } from './services/save-customer.service';
import { GetCustomerService } from './services/get-customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouter } from '../app/routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { SharedComponent } from './components/shared/shared.component';
import { DadosBitcoinComponent } from './components/shared/dados-bitcoin/dados-bitcoin.component';
import { DadosPessoaisComponent } from './components/shared/dados-pessoais/dados-pessoais.component';
import { DadosResidencialComponent } from './components/shared/dados-residencial/dados-residencial.component';
import { LabelInformationComponent } from './components/shared/messages/label-information/label-information.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AuthService } from './services/auth.service';
import { MenuComponent } from './components/shared/menu/menu.component';
import { LinkComponent } from './components/shared/messages/link/link.component';
import { DivisorComponent } from './components/shared/divisor/divisor.component';
import { CardInformationComponent } from './components/shared/card-information/card-information.component';
import { GuardRouter } from '../app/services/guard.service';
import { EditPerfilComponent } from './components/edit-perfil/edit-perfil.component';
import { EditBitcoinComponent } from './components/edit-bitcoin/edit-bitcoin.component'
import { HttpModule } from '@angular/http';
import { GetDatosBitcoinService } from './services/get-datos-bitcoin.service';
import { SaveDatosBitcoinService } from './services/save-datos-bitcoin.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    SharedComponent,
    DadosBitcoinComponent,
    DadosPessoaisComponent,
    DadosResidencialComponent,
    LabelInformationComponent,
    DashboardComponent,
    IndexComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LinkComponent,
    DivisorComponent,
    CardInformationComponent,
    EditPerfilComponent,
    EditBitcoinComponent,
  ],
  imports: [
    BrowserModule,
    appRouter,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    GuardRouter,
    GetCustomerService,
    SaveCustomerService,
    GetDatosBitcoinService,
    SaveDatosBitcoinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
