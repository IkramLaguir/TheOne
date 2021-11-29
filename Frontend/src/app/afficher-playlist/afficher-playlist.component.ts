import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message/message.service";
import {ActivatedRoute} from "@angular/router";

// Ce component permet d'afficher le contenu d'une playlist

@Component({
  selector: 'app-afficher-playlist',
  templateUrl: './afficher-playlist.component.html',
  styleUrls: ['./afficher-playlist.component.scss']
})
export class AfficherPlaylistComponent implements OnInit {
  videos: any[] = [];
  playlistId :any =   this.activatedRoute.snapshot.paramMap.get('id');

  constructor( private message: MessageService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.playlistId)
    this.message.getAllVideos(this.playlistId).subscribe({
      next: (value) => {
        this.videos = value.data;
        console.log(this.videos[0].list_video)
      },
    });
  }

}
