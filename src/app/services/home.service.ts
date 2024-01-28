import { Injectable, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { CleaningServices } from '../shared/home/CleaningServices';
import { serviceDetails } from '../shared/dialog1/serviceDetails';
import { Bookings } from '../shared/bookings/Bookings';



@Injectable({
  providedIn: 'root'
})
export class HomeService{
  token! : string;
  constructor(private httpClient: HttpClient) {}

  get(
    sortColumn: string,
    sortType: string,
    searchKey: string,
    currentPage: number,
    pageSize: number
  ): Observable<HttpResponse<any>> {
    let url = `https://localhost:7063/api/CleaningServices?_page=${currentPage}&_limit=${pageSize}`;
    if (sortColumn && sortType) {
      url = `${url}&_sort=${sortColumn}&_order=${sortType}`;
    }
    if (searchKey) {
      if (url.indexOf('&') > -1) {
        url = `${url}&q=${searchKey}`;
      } else {
        url = `${url}q=${searchKey}`;
      }
    }
    return this.httpClient.get<HttpResponse<any>>(url, { observe: 'response' });
  }

  getItemByID(id : string){
    return this.httpClient.get("https://localhost:7063/api/CleaningServices/"+id);
  }

  addBooking(arg: any) {
    return this.httpClient.post("https://localhost:7063/api/Bookings",arg);
  }

  addService(serviceData: serviceDetails): Observable<any> {
    const url = 'https://localhost:7063/api/CleaningServices';
    return this.httpClient.post<serviceDetails>(url, serviceData);
  }

  deleteService(serviceId : string){
    return this.httpClient.delete(`https://localhost:7063/api/CleaningServices/${serviceId}`)
  }

  updateService(serviceData: serviceDetails){
    const url = `https://localhost:7063/api/CleaningServices/${serviceData.serviceId}`;

    return this.httpClient.put(url, serviceData)
  }

  getBookingbyUsername(username : string){
    return this.httpClient.get(`https://localhost:7063/api/Bookings/getbyuser/${username}`)
  }

  getBookingbyBookingId(BookingId : string){
    return this.httpClient.get(`https://localhost:7063/api/Bookings/${BookingId}`)
  }

  addReviews(arg1: any) {
    return this.httpClient.post("https://localhost:7063/api/Review",arg1);
  }

}
