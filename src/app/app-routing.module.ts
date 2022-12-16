import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginBlocComponent } from './login-bloc/login-bloc.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    children :[
      {
        path: '',
        component: LoginBlocComponent,
      }
    ]
  },
  {
    path:'landing-page',
    component:LandingPageComponent
  },
  {
    path:'auth',
    component:AuthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
