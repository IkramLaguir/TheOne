import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.scss']
})
export class SeConnecterComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [Validators.required]);

  email: string = '';
  password: string = '';
  constructor(private route: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('loggedIn') == 'true') {
      this.route.navigateByUrl('/');
    }
  }
  authenticate(): void {
    console.log(this.email + ' ' + this.password);
    // TODO: Réaliser la fonction authenticate avec la liaison du backend

    this.route.navigateByUrl('/');
  }

}
