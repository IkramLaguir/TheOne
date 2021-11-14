import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recherche-videos',
  templateUrl: './recherche-videos.component.html',
  styleUrls: ['./recherche-videos.component.scss']
})
export class RechercheVideosComponent implements OnInit {

  @Input() videos: any;
  constructor() { }

  ngOnInit(): void {
  }


}
