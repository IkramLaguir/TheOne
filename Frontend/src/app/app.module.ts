import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import { MesPlaylistsComponent } from './mes-playlists/mes-playlists.component';
import { RechercheVideosComponent } from './recherche-videos/recherche-videos.component';
import { LectureVideoComponent } from './lecture-video/lecture-video.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AjoutPlaylistComponent } from './ajout-playlist/ajout-playlist.component';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SeConnecterComponent} from "./se-connecter/se-connecter.component";
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AfficherPlaylistComponent } from './afficher-playlist/afficher-playlist.component';


@NgModule({
  declarations: [AppComponent,
    AccueilComponent,
    MenuComponent,
    MesPlaylistsComponent,
    RechercheVideosComponent,
    LectureVideoComponent,
    AjoutPlaylistComponent,
    InscriptionComponent,
    SeConnecterComponent,
    AfficherPlaylistComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    MatMenuModule,
    FontAwesomeModule,
    FontAwesomeModule,
    FontAwesomeModule,
    FontAwesomeModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
