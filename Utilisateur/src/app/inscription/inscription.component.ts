import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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

  email: string = '';
  password: string = '';
  nom:string=''
  categorie: string[] = [];
  constructor(private route: Router) { }

  ngOnInit(): void {
  }


}
