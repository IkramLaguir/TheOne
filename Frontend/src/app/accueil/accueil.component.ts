import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { MessageService } from '../message/message.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})

export class AccueilComponent implements OnInit {


  titre: string;
  errorMessage: string;

  constructor(private message: MessageService, ) {
    this.titre = '';
    this.errorMessage = '';
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
        const x: any = [];
        for (let i = 0 ; i < res.items.length ; i++){
          x[i] = {
            url : `https://www.youtube.com/watch?v=${res.items[i].id.videoId}`,
            titre : res.items[i].snippet.title,
            description : res.items[i].snippet.description,
            createur : res.items[i].snippet.channelTitle
          };
        }

        console.log(x);
      });
  }



  }
