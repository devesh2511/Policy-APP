import { Component, OnInit } from '@angular/core';
import { Emitter } from '../../emitters/auth.emitter';
import { LoginService } from '../../services/login.service';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { HomeService } from '../../services/home.service';
import { CleaningServices } from '../home/CleaningServices';
import { ActivatedRoute, ActivationEnd, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs';

declare var Razorpay: any;

@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.css']
})

export class BookServiceComponent implements OnInit {
  id: string = "";
  data: any;
  constructor(private router: ActivatedRoute, private service: HomeService, private routed: Router) { }

  ngOnInit(): void {
    this.router.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
    ).subscribe((newValue) => this.id = newValue)

    this.service.getItemByID(this.id).subscribe((data) => {
      console.log(data);
      this.data = data;
    })
  }

  getRandomIntegerString(min: number, max: number): string {
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInteger.toString();
  }
  bookingId = this.getRandomIntegerString(100, 200);

  paymentGateway() {
    let sums = this.data.price;
    let serviceId = this.data.serviceId;
    let options = {
      "key": "rzp_test_UHsR0lIAjZhxPI",
      "amount": sums * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "DUSTER", //your business name
      "description": "Payment" + this.data.serviceName,
      "image": "../../../../assets/paymentlogo.png",
      "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": (response) => {
        if (!response.razorpay_payment_id || response.razorpay_payment_id < 1) {
          // payment failed
        } else {
          // payment successful
        }
        alert("Payment successful! Please book an appointment!!");

        // this.routed.navigateByUrl('/appointment');
        const thisuser = localStorage.getItem("username");
        console.log(thisuser);
        const arg = { "BookingId": this.bookingId, 
        "username": thisuser, 
        "serviceId":this.data.serviceId,
        "serviceName": this.data.serviceName, 
        "PaymentId": response.razorpay_payment_id, 
        Price: this.data.price, 
        "Category": this.data.category }
        console.log(arg);
        this.service.addBooking(arg).subscribe((data: any) => {
          console.log(this.data);
        });
        this.routed.navigateByUrl('/appointment');

      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Devesh Jain", //your customer's name
        "email": "devesh.jain@chubb.com",
        "contact": "7843076387"  //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "DUSTER Cleaning Services"
      },
      "theme": {
        "color": "#000000"
      }
    };
    this.routed.navigateByUrl('/appointment');
    Razorpay.open(options);
  }

}

