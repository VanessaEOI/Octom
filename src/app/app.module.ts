import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ImgLeftComponent } from './login-page/img-left/img-left.component';
import { LoginBarComponent } from './login-page/login-bar/login-bar.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, ImgLeftComponent, LoginBarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
