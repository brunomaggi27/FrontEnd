import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logoargentina',
  templateUrl: './logoargentina.component.html',
  styleUrls: ['./logoargentina.component.css']
})


export class LogoargentinaComponent implements OnInit {
  islogged = false;

  constructor(private router: Router, private tokenService: TokenService) { }



  rgOnInit(): void {

  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.islogged = true;
    } else {
      this.islogged = false;
    }
  }




  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  login() {
    this.router.navigate(['/login'])
  }

}
