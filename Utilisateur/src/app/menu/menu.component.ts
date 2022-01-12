import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  constructor(public auth: AuthService, private route: Router ) { }

  ngOnInit(): void {
  }

  logout(): void{
  sessionStorage.removeItem('loggedIn');
  this.route.navigateByUrl('/se-connecter');
  this.auth.isLoggedIn= false;
  }
}
