import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "../message/message.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);
  countryFormControl = new FormControl('', [Validators.required]);
  interestFormControl = new FormControl('', [Validators.required]);

  email: string = '';
  password: string = '';
  userName:string=''
  country: string = '';
  interest: string = '';
  dateOfBirth: any;
  constructor(private route: Router, private message:MessageService) { }

  ngOnInit(): void {
  }
  InterestList = [
    { value: 'Sport' },
    { value: 'Technologie' },
    { value: 'Divertissement' },
    { value: 'Commerce' },
  ];

  CountryList = [
    { value: 'France' },
    { value: 'Italie' },
    { value: 'Espagne' },
  ];

  inscrire():void {
    const data = {
      email: this.email,
      password: this.password,
      userName: this.userName,
      dateOfBirth: this.dateOfBirth,
      pays: this.country,
      interest: this.interest,
    };
    console.log(this.dateOfBirth);
    this.message.signup(data).subscribe({
      next: (value) => {
        console.log(value)
        this.route.navigateByUrl('/connect');
      },
    });
  }

  retour():void{
    this.route.navigateByUrl('/connect');
  }
}

