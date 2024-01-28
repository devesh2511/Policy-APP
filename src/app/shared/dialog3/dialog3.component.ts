import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { serviceDetails } from '../dialog1/serviceDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog3.component.html',
  styleUrls: ['./dialog3.component.css']
})
export class Dialog3Component implements OnInit {

  updateserviceForm: FormGroup
  success = false;
  errMessage = ''
  dialogRef: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
   private router: Router,
    private service: HomeService
  ) { }

  ngOnInit(): void {
    this.updateserviceForm = this.formBuilder.group({
      serviceId: ['', Validators.required],
      serviceName: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  updateservice(): void {
    const serviceData: serviceDetails = this.updateserviceForm.value;
    this.service.addService(serviceData).subscribe({
      next: (res: serviceDetails) =>{
        console.log(res);
        alert("New Cleaning Service Added")
        this.router.navigate(['/'])
        this.dialogRef.close();
      },
      error:(err: any) =>{
        console.log(err);
      }
    });
  }

}
