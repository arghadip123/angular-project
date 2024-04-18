import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _router: Router;
    constructor(_router: Router) {
        this._router = _router;
    }
  submitform(){
    this._router.navigateByUrl('/otp');
  }
}
