import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { BookServiceComponent } from './shared/book-service/book-service.component';
import { AppointmentComponent } from './shared/appointment/appointment.component';
import { AdminComponent } from './shared/admin/admin.component';
import { Dialog1Component } from './shared/dialog1/dialog1.component';
import { Dialog2Component } from './shared/dialog2/dialog2.component';
import { Dialog3Component } from './shared/dialog3/dialog3.component';
import { BookingsComponent } from './shared/bookings/bookings.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'book-service/:id', component: BookServiceComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'dialog1', component:Dialog1Component},
  {path: 'dialog2', component:Dialog2Component},
  {path: 'dialog3', component:Dialog3Component},
  {path: 'bookings', component:BookingsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
