import { Component, OnInit } from '@angular/core';
import { Emitter } from '../../../emitters/auth.emitter';
import { TokenService } from '../../../services/token.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn = true ;

  constructor(private tokenService : TokenService, private router: Router) { }

  ngOnInit(): void {
    Emitter.authEmitter.subscribe(res=>{
      this.isLoggedIn = res
    })
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
