import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from "../message/message.service";

@Component({
  selector: 'app-recherche-videos',
  templateUrl: './recherche-videos.component.html',
  styleUrls: ['./recherche-videos.component.scss']
})
export class RechercheVideosComponent implements OnInit {
  @Input() videos: any;
  userId = sessionStorage.getItem("userId");
  playlists : any[] = [];

  constructor(private message : MessageService) { }

  ngOnInit(): void {
    this.message.getAllPlaylist(this.userId).subscribe({
      next: (value) => {
        console.log(value.data)
        this.playlists = value.data;
      },
    });

  }

  addVideo(playlistId : any, url:string): void{
    console.log(playlistId);
    console.log(url);

    const obj : Object = {
      playlistId : playlistId,
      list:url,
    }

    this.message.addVideo(obj).subscribe({
      next: (value) => {
        console.log(value.data)
      }
    });

  }
}
