import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from "../message/message.service";
import {AuthService} from "../auth/auth.service";
import {DataVideoService} from "../dataVideo/data-video.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recherche-videos',
  templateUrl: './recherche-videos.component.html',
  styleUrls: ['./recherche-videos.component.scss']
})
export class RechercheVideosComponent implements OnInit {
  @Input() videos: any;
  userId = sessionStorage.getItem("userId");
  playlists : any[] = [];
  subscription: Subscription;
  msg: string = '';

  constructor(private message : MessageService, public auth : AuthService,  public dataService : DataVideoService,
              public route : Router ) { }

  ngOnInit(): void {
    this.message.getAllPlaylist(this.userId).subscribe({
      next: (value) => {
        this.playlists = value.data;
      },
    });

  }

  addVideo(playlistId : any, video : any): void{
    console.log(playlistId);
    const obj : Object = {
      playlistId : playlistId,
      list : video
    }

    this.message.addVideo(obj).subscribe({
      next: (value) => {
        console.log(value.data)
      }
    });

  }
  openVideo(index : number){
    console.log(this.videos[index]);
    this.dataService.changeMessage(this.videos[index]);
    this.route.navigateByUrl('/lecture-video');

  }
}
