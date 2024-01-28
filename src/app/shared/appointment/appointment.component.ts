import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  // id: string = "";
  // data: any;

  constructor() { }

  ngOnInit(): void {
    // this.routed.paramMap.pipe(
    //   map((params: ParamMap) => params.get('id')),
    // ).subscribe((newValue) => this.id = newValue)

    // this.service.getItemByID(this.id).subscribe((data) => {
    //   console.log(data);
    //   this.data = data;
    // })
  }

}
