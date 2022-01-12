import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  titleFormControl = new FormControl('', [Validators.required]);
  ageFormControl = new FormControl('', [Validators.required]);
  countryFormControl = new FormControl('', [Validators.required]);
  categoryFormControl = new FormControl('', [Validators.required]);
  detailsFormControl = new FormControl('', [Validators.required]);

  title: string = '';
  age: number;
  country: string = '';
  category: string = '';
  details: string = '';

  CategoryList = [
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

  constructor(private route: Router, private message: MessageService) {}

  ngOnInit(): void {}

  saveNewAnnonce(): void {
    const data = {
      advertiserId: sessionStorage.getItem('id'),
      titre: this.title,
      ageMin: this.age,
      pays: this.country,
      category: this.category,
      text: this.details,
    };
    this.message.create(data).subscribe({
      next: (value) => {
        this.route.navigateByUrl('/');
      },
    });
  }
}
