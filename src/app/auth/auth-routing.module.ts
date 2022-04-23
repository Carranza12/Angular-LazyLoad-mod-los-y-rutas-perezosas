import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'forgot', component: ForgotComponent },
      { path: 'registro', component: RegistroComponent },
      { path: '**', redirectTo: 'login' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}
