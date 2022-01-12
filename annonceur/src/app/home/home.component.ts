import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message/message.service';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '../data';

export interface AnnonceurTable {
  id: number;
  title: string;
  category: string;
  state: string;
  creationDate: string;
  lastModif: string;
  nbOfVues: number;
}

/*const FAKE_DATA: AnnonceurTable[] = [
  {
    id: 1,
    title: 'Pub Nike',
    category: 'Sport',
    state: 'En attente',
    creationDate: '20/11/2021',
    lastModif: '20/11/2021',
  },
  {
    id: 2,
    title: 'Pub Adidas',
    category: 'Sport',
    state: 'Accepté',
    creationDate: '20/11/2021',
    lastModif: '20/11/2021',
  },
  {
    id: 3,
    title: 'Pub Apple',
    category: 'Technologie',
    state: 'En attente',
    creationDate: '20/11/2021',
    lastModif: '20/11/2021',
  },
  {
    id: 4,
    title: 'Pub Amazon',
    category: 'Commerce',
    state: 'Refusé',
    creationDate: '20/11/2021',
    lastModif: '20/11/2021',
  },
];
*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'category',
    'state',
    'creationDate',
    'lastModif',
    'nbOfVues'
  ];

  dataSource = new MatTableDataSource<Data>();
  id: any = sessionStorage.getItem('id');

  constructor(private route: Router, private message: MessageService) {}

  ngOnInit(): void {
    this.message.getAllAd(this.id).subscribe({
      next: (value) => {
        this.dataSource.data = value['data'];
      },
    });
  }

  newAnnonce(): void {
    this.route.navigateByUrl('/form');
  }
}
