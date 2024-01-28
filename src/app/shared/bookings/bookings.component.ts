import { Component, OnInit } from '@angular/core';
import { Bookings } from './Bookings';
import { HomeService } from 'src/app/services/home.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {


  Bookings !: Bookings[];
  routed: any;
  service: any;
  arg1: { ServiceName: string; username: string; bookingId: string; category: string; review: string; };
  reviewForm!: FormGroup;


  constructor(private bookings: HomeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    const thisuser = localStorage.getItem("username");

    this.bookings.getBookingbyUsername(thisuser).subscribe((data: any) => {
      this.Bookings = data as Bookings[];
      console.log(this.Bookings)
    });
    console.warn(this.Bookings)

    this.reviewForm = this.formBuilder.group({
      review: ['', Validators.required],
    });

  }

  addReview(id: string) {
    console.warn(id);

    const review = this.reviewForm.value;
    console.warn(review.review)
    const thisuser = localStorage.getItem("username")

    this.bookings.getBookingbyUsername(thisuser).subscribe((data: any) => {
      this.Bookings = data as Bookings[];
    });
    // for (let booking of this.Bookings) {
      // const arg1 = {
      //   "serviceName": booking.serviceName,
      //   "username": thisuser,
      //   "bookingId": id,
      //   "category": booking.category,
      //   "review": review.review
      // }
      this.bookings.getBookingbyBookingId(id).subscribe((data: any)=>{
        const arg1 = {
          "serviceName": data.serviceName,
          "username": thisuser,
          "bookingId": id,
          "category": data.category,
          "review": review.review
        }
        this.bookings.addReviews(arg1).subscribe((arg1: any) => {
          console.log(arg1);
        });
        alert("Review Sent! Thank You!")
        this.routed.navigateByUrl('/booking');
      })
    // }
    console.log(this.arg1);
 

  }

}


