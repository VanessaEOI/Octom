import { Component } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.scss'],
})
export class LoginBarComponent {
  faEye = faEye;
  hello(e: any) {
    console.log(e);
  }
}
