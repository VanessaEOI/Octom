import { Component } from '@angular/core';
import { faToggleOff, faToggleOn, faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.scss'],
})
export class LoginBarComponent {
  faToggleOff = faToggleOff;
  faToggleOn = faToggleOn;
  faEye = faEye;
}
