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
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { RechercheVideosComponent } from './recherche-videos/recherche-videos.component';
import { LectureVideoComponent } from './lecture-video/lecture-video.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AjoutPlaylistComponent } from './ajout-playlist/ajout-playlist.component';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent,
    AccueilComponent,
    MenuComponent,
    MesPlaylistsComponent,
    NousContacterComponent,
    RechercheVideosComponent,
    LectureVideoComponent,
    AjoutPlaylistComponent],
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


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
