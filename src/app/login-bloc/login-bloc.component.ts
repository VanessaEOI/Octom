import { Component } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-bloc',
  templateUrl: './login-bloc.component.html',
  styleUrls: ['./login-bloc.component.scss']
})
export class LoginBlocComponent {
  faEye = faEye;
}
