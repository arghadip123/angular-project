import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent} from './otp/otp.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,OtpComponent,FooterComponent,HeaderComponent,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  

  
})
export class AppComponent {
  title = 'my-app';
}
