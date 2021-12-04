import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  faSearch = faSearch;

  titre :string;
  errorMessage: string;
  liste : any;

  constructor() {
    this.titre = '';
    this.errorMessage = '';
    this.liste=[];
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.titre.trim() == '') {
      this.errorMessage = 'Champ(s) vide(s)';
    }
    console.log(this.titre);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${this.titre}&key=AIzaSyC4P1dArLxP3TUvS_W0P0QISO-QfT4SsZ8&maxResults=10&type=video`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0 ; i < res.items.length ; i++){
          this.liste[i] = {
            videoId : res.items[i].id.videoId,
            url : `https://www.youtube.com/watch?v=${res.items[i].id.videoId}`,
            titre : res.items[i].snippet.title,
            description : res.items[i].snippet.description,
            createur : res.items[i].snippet.channelTitle,
          };
        }
        console.log(this.liste)
      });
  }




}
