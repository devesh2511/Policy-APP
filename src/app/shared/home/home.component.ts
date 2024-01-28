import { Emitter } from '../../emitters/auth.emitter';
import { LoginService } from '../../services/login.service';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { HomeService } from '../../services/home.service';
import { CleaningServices } from './CleaningServices';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  userName!: string;

  title = 'Cleaning Services';
  sortOrderControl = new FormControl('');
  searchKey = new FormControl('');
  CleaningServices: CleaningServices[] = [];
  displayedServices: CleaningServices[] = [];
  totalRecords: number;
  pageIndex = 0;
  pageSize = 5;

  constructor(private homeService: HomeService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("token");

    this.getApi('', '', '',
      this.pageIndex,
      this.pageSize);
    this.sortOrderControl.valueChanges.subscribe((value) => {
      if (value) {
        let sortResult = this.doSorting(value);
        this.pageIndex = 0;
        this.pageSize = 5;
        
      }
    });
  }

  doSorting(value: string) {
    let sortColumn: string = '';
    let sortType: string = '';
    if (value.toLowerCase() === 'default') {
      this.displayedServices = this.CleaningServices.sort((a, b) => a.serviceId - b.serviceId)

    } else if (value.toLowerCase() === 'price-by-desc') {
      this.displayedServices = this.CleaningServices.sort((a, b) => b.price - a.price)

    } else if (value.toLowerCase() === 'price-by-asc') {
      this.displayedServices = this.CleaningServices.sort((a, b) => a.price - b.price)

    } else if (value.toLowerCase() === 'category-by-desc') {
      this.displayedServices = this.CleaningServices.sort((a, b) => (b.serviceName > a.serviceName) ? 1 : -1)

    } else if (value.toLowerCase() === 'category-by-asc') {
      this.displayedServices = this.CleaningServices.sort((a, b) => (a.serviceName > b.serviceName) ? 1 : -1)

    }

  }

  searchByName() {
    let sortResult = this.doSorting(this.sortOrderControl.value ?? '');
    this.pageIndex = 0;
    this.pageSize = 5;
    console.warn("inside search name");

    const query = this.searchKey.value?.toLowerCase();

    // this.getApi(
    //   sortResult.sortColumn,
    //   sortResult.sortType,
    //   this.searchKey.value ?? '',
    //   this.pageIndex,
    //   this.pageSize
    // );

    this.displayedServices = (this.CleaningServices.filter(service => service?.serviceName?.toLowerCase()?.includes(query)));

  }

  getApi(sortColumn: string, sortType: string, searchKey: string,
    currentPage: number, pageSize: number) {
    this.homeService
      .get(sortColumn, sortType, searchKey, (currentPage + 1), pageSize)
      .subscribe((response) => {
        console.log(response);
        this.CleaningServices = response.body as CleaningServices[];
        this.displayedServices = [...this.CleaningServices];
        this.totalRecords = response.headers
          ? Number(response.headers.get('X-Total-Count'))
          : 0;
        console.log(this.CleaningServices.length);
      });
  }

  handlePageEvent(e: PageEvent) {

    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    let sortResult = this.doSorting(this.sortOrderControl.value ?? '');

  }
}


