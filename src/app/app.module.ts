import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './shared/register/register.component';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BookServiceComponent } from './shared/book-service/book-service.component';
import { AppointmentComponent } from './shared/appointment/appointment.component';
import { SharedModule } from './shared/shared.module';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AdminComponent } from './shared/admin/admin.component';
import { BookingsComponent } from './shared/bookings/bookings.component';
import { Dialog1Component } from './shared/dialog1/dialog1.component';
import { Dialog2Component } from './shared/dialog2/dialog2.component';
import { Dialog3Component } from './shared/dialog3/dialog3.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,

    AdminComponent,
    HomeComponent,
    BookingsComponent
    // HomeComponent,
    
    // NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    SharedModule
    // MatOptionModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
