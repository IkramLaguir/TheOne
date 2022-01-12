import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {MessageService} from "../message/message.service";

@Component({
  selector: 'app-ajout-playlist',
  templateUrl: './ajout-playlist.component.html',
  styleUrls: ['./ajout-playlist.component.scss']
})
export class AjoutPlaylistComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  userId = sessionStorage.getItem("userId");


  constructor(private message : MessageService) {

  }

  ngOnInit(): void {
  }

  // Ajouter une nouvelle playlist
  addNewPlaylist(titrePlaylist: string, userId : any) {
    this.newItemEvent.emit(titrePlaylist);

    const obj : Object = {
      titre : titrePlaylist,
      userId: userId
    }
    this.message.addPlaylist(obj).subscribe({
      next: (value) => {
        console.log(value.data)
      }
    });
  }





}

