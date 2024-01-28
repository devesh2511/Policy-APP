import { Component, OnInit } from '@angular/core';
import { Emitter } from '../../../emitters/auth.emitter';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isLoggedIn = true ;

  constructor(private tokenService : TokenService) { }

  ngOnInit(): void {
    Emitter.authEmitter.subscribe(res=>{
      this.isLoggedIn = res
    })
  }

  logout(){
    localStorage.clear();
  }

}
