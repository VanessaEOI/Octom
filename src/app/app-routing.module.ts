import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImgLeftComponent } from './login-page/img-left/img-left.component';
import { LoginBarComponent } from './login-page/login-bar/login-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login-page',
    component: LoginPageComponent,
    children: [
      {
        path: 'img-left',
        component: ImgLeftComponent,
      },
      {
        path: 'login-bar',
        component: LoginBarComponent,
      },
    ],
  },
  {
    path: 'landing-page',
    component: LandingPageComponent,
    children: [{}],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
