import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {MessageService} from "../message/message.service";

@Component({
  selector: 'app-ajout-playlist',
  templateUrl: './ajout-playlist.component.html',
  styleUrls: ['./ajout-playlist.component.scss']
})
export class AjoutPlaylistComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();


  constructor() {

  }

  ngOnInit(): void {
  }

  addNewPlaylist(titrePlaylist: string) {
    // Faire l'enregistrement dans la BDD
    this.newItemEvent.emit(titrePlaylist);
  }

}

