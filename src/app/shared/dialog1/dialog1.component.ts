import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { serviceDetails } from './serviceDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component implements OnInit {

  newserviceForm: FormGroup = new FormGroup({});
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
    this.newserviceForm = this.formBuilder.group({
      serviceId: ['', Validators.required],
      serviceName: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  addnewservice(): void {
    const serviceData: serviceDetails = this.newserviceForm.value;
    this.service.addService(serviceData).subscribe({
      next: (res: serviceDetails) => {
        console.log(res);
        alert("New Cleaning Service Added")
        this.router.navigate(['/'])
        this.dialogRef.close();

      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}
