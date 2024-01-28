import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { serviceDetails } from '../dialog1/serviceDetails';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.css']
})
export class Dialog2Component implements OnInit {

  deleteServiceForm: FormGroup
  success = false;
  errMessage = ''
  dialogRef: any;
  services:Observable<serviceDetails[]>;
  

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private service: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.deleteServiceForm = this.formBuilder.group({
      serviceId: ['', Validators.required],
    })
  }


  deleteService(){
    const serviceId = this.deleteServiceForm.get('serviceId').value;
    this.service.deleteService(serviceId).subscribe((response)=>{
      alert("Cleaning Service Deleted");
      this.router.navigate(['/'])
    
    })

  }
   

}
