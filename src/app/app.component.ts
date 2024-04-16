import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent} from './otp/otp.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet,LoginComponent,OtpComponent,FooterComponent,HeaderComponent,RegistrationComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  

  
})
export class AppComponent {
  title = 'my-app';
}
