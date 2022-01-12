import {Component, OnInit} from '@angular/core';
import {DataVideoService} from "../dataVideo/data-video.service";
import {Subscription} from "rxjs";
import {AuthService} from "../auth/auth.service";
import {MessageService} from "../message/message.service";

@Component({
  selector: 'app-lecture-video',
  templateUrl: './lecture-video.component.html',
  styleUrls: ['./lecture-video.component.scss']
})
export class LectureVideoComponent implements OnInit {

  userId = sessionStorage.getItem("userId");
  playlists : any[] = [];
  subscription: Subscription;
  video: any;
  advert:any;

  constructor(public dataService : DataVideoService, public auth : AuthService, private message : MessageService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe(
      value =>{
        this.video = value,
          console.log(this.video)
      });
    this.message.getAllPlaylist(this.userId).subscribe({
      next: (value) => {
        this.playlists = value.data;
      },
    });
    // Si l'utilisateur est connecté
    console.log(this.auth.test())
    if (!this.auth.test()){
      this.message.getAdvertConnected(this.userId).subscribe({
        next: (value) => {
          this.advert = value.data;
          console.log(this.advert);
        },
      })
    }
    else if (this.auth.test()){
      this.message.getAdvertNotConnected().subscribe({
        next: (value) => {
          this.advert = value.data;
          console.log(this.advert);
        },
      })
    }
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







}
