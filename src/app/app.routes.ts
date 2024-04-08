import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';


export const routes: Routes = [
    {path:'', redirectTo: '', pathMatch: 'full' },
    {path:'login', component: LoginComponent},
    {path:'otp', component: OtpComponent},
];
