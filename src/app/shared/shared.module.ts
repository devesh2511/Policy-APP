import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { BookServiceComponent } from './book-service/book-service.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AdminComponent } from './admin/admin.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dialog2Component } from './dialog2/dialog2.component';
import { Dialog3Component } from './dialog3/dialog3.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule, MatCard, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { BookingsComponent } from './bookings/bookings.component';
import {MatTableModule} from '@angular/material/table';
import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    Component,

  ],
  exports: [
    NavComponent,
    BookServiceComponent,
    AppointmentComponent,
    FooterComponent,
    Dialog1Component,
    Dialog2Component,
    Dialog3Component,
    MatTableModule
    //HomeComponent
  ]
})
export class SharedModule { }
