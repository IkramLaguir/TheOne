import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [Validators.required]);

  email: string = '';
  password: string = '';

  constructor(private route: Router, private auth: AuthService) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('loggedIn') == 'true') {
      this.route.navigateByUrl('/');
    }
  }

  authenticate(): void {
    const data = {
      email: this.email,
      password: this.password,
    };
    this.auth.sendAuthentication(data).subscribe({
      next: (value) => {
        sessionStorage.setItem('id', value.data.adminId);
        this.auth.finalizeAuthentication(value);
      },
      complete: () => this.finalizeCheck(),
    });
  }

  finalizeCheck(): void {
    if (this.auth.isLoggedIn) {
      if (this.auth.redirectUrl == '') {
        this.route.navigateByUrl('/');
      } else {
        this.route.navigateByUrl(this.auth.redirectUrl);
      }
    }
  }
}
