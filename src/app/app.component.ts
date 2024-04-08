import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {OtpComponent} from './otp/otp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,OtpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  

  
})
export class AppComponent {
  title = 'my-app';
}
