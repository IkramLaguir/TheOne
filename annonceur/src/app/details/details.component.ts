import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id = this.ActivatedRoute.snapshot.paramMap.get('id');
  FAKE_DATA = {
    id: 1,
    title: 'Pub Nike',
    category: 'Sport',
    state: 'En attente',
    creationDate: '20/11/2021',
    lastModif: '20/11/2021',
    pubDetail: '25% de réduction sur tout le site !',
  };
  DATA: any;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private route: Router,
    private message: MessageService
  ) {}

  ngOnInit(): void {
    this.message.getOneAd(this.id).subscribe({
      next: (value) => {
        const data = value.data[0];
        this.DATA = {
          title: data.title,
          category: data.category,
          state: data.status,
          creationDate: data.createdAt,
          lastModif: data.updateAt,
          pubDetail: data.text,
        };
      },
    });
  }

  deleteAnnonce(): void {
    this.message.removeOneAd(this.id).subscribe({
      next: (value) => {
        this.route.navigateByUrl('/');
      },
    });
  }

  backToHome(): void {
    this.route.navigateByUrl('/');
  }
}
