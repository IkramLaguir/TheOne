import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isLoggedIn: any = sessionStorage.getItem('loggedIn');
  constructor(private route: Router, public auth: AuthService) {}

  ngOnInit(): void {}

  logout(): void {
    sessionStorage.clear();
    this.route.navigateByUrl('/login');
  }

  redirectToHome(): void {
    this.route.navigateByUrl('/');
  }
}
