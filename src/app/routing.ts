import { EditBitcoinComponent } from './components/edit-bitcoin/edit-bitcoin.component';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { Routes, RouterModule } from '@angular/router'
import { GuardRouter } from './services/guard.service';
import { EditPerfilComponent } from './components/edit-perfil/edit-perfil.component';

const routes : Routes = [
    {path: 'index', component: IndexComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [GuardRouter]},
    {path: 'editperfil', component: EditPerfilComponent, canActivate: [GuardRouter]},
    {path: 'editbitcoin', component: EditBitcoinComponent, canActivate: [GuardRouter]},
    {path: '**', component: IndexComponent},
];

export const appRouter = RouterModule.forRoot(routes);