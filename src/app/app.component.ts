import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'UI';

  constructor(private tokenService : TokenService , private router : Router){}

  ngOnInit(): void {
    if(this.tokenService.getAccessToken() && this.tokenService.getRefreshToken()){
      console.error('HERE');
      //this.router.navigate([''])
    }
  }

}
