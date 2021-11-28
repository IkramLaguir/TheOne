import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {AuthService} from "../auth/auth.service";


@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.scss']
})
export class SeConnecterComponent implements OnInit {

  email: string = '';
  password: string = '';
  submitted = false;
  errorMessage:string='';


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [Validators.required]);

  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('loggedIn') == 'true') {
      // get return url from route parameters or default to '/'
      this.route.navigateByUrl('/');
    }
  }
  authenticate(): void {
    this.submitted = true;
    if (this.emailFormControl.invalid || this.passwordFormControl.invalid) {
      return;
    }
    console.log(this.email + ' ' + this.password);
    const obj: Object = {
      email: this.email,
      password: this.password,
    };


    this.auth.sendAuthentication(obj).subscribe({
      next: (value) => {
        //console.log(value);
        sessionStorage.setItem("userId", value.data.userId);
        this.auth.finalizeAuthentication(value);
      },
      complete: () => this.finalizeCheck(),

    });

  }
  finalizeCheck(): void {
    if (this.auth.isLoggedIn) {
      this.errorMessage = '';
      if (this.auth.redirectUrl == '') {
        this.route.navigateByUrl('/admin');
      } else {
        this.route.navigateByUrl(this.auth.redirectUrl);
      }
    } else {
      this.errorMessage = 'Mauvaise Combinaison';
    }
  }


}
