import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SidebarComponent } from './landing-page/sidebar/sidebar.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { MessagesListComponent } from './landing-page/messages-list/messages-list.component';
import { MessagesViewComponent } from './landing-page/messages-view/messages-view.component';
import { ProfilComponent } from './landing-page/profil/profil.component';
import { AddMessageComponent } from './landing-page/add-message/add-message.component';
import { PagesComponent } from './landing-page/pages/pages.component';
import { ActivityComponent } from './landing-page/pages/activity/activity.component';
import { DashboardComponent } from './landing-page/pages/dashboard/dashboard.component';
import { EbooksComponent } from './landing-page/pages/ebooks/ebooks.component';
import { FilesComponent } from './landing-page/pages/files/files.component';
import { MessengerComponent } from './landing-page/pages/messenger/messenger.component';
import { SettingsComponent } from './landing-page/pages/settings/settings.component';
import { ButtonComponent } from './_components/button/button.component';
import { InputComponent } from './_components/input/input.component';
import { LoginBlocComponent } from './login-bloc/login-bloc.component';
import { AuthComponent } from './auth/auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LandingPageComponent,
    SidebarComponent,
    HeaderComponent,
    MessagesListComponent,
    MessagesViewComponent,
    ProfilComponent,
    AddMessageComponent,
    PagesComponent,
    ActivityComponent,
    DashboardComponent,
    EbooksComponent,
    FilesComponent,
    MessengerComponent,
    SettingsComponent,
    ButtonComponent,
    InputComponent,
    LoginBlocComponent,
    AuthComponent,
    ForgotPasswordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
