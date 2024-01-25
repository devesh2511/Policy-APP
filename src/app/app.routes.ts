import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    { path: '', component: HomeComponent }, // Root route for home component
    { path: 'app-signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
];
