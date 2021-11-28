import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AjoutPlaylistComponent} from "../ajout-playlist/ajout-playlist.component";
import {MessageService} from "../message/message.service";

@Component({
  selector: 'app-mes-playlists',
  templateUrl: './mes-playlists.component.html',
  styleUrls: ['./mes-playlists.component.scss']
})
export class MesPlaylistsComponent implements OnInit {
  playlists : any[] = [];
  playlist :string = '';
  userId = sessionStorage.getItem("userId");

  constructor(public dialog: MatDialog, private message: MessageService) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AjoutPlaylistComponent,
      {
        width: '25%',
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      // A corriger - pas optimal
      this.message.getAllPlaylist(this.userId).subscribe({
        next: (value) => {
          console.log(value.data)
          this.playlists = value.data;
        },
      });
    });

  }

  ngOnInit(): void {
    this.message.getAllPlaylist(this.userId).subscribe({
      next: (value) => {
        console.log(value.data)
        this.playlists = value.data;
      },
    });
  }

  // Ajouter une playlist à la liste des playlists
  addPlaylist(newPlaylist: string) {
    if (newPlaylist.length > 0)
      this.playlists.push(newPlaylist);
  }




}
