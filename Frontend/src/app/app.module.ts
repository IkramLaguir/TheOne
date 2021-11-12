import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MesPlaylistsComponent } from './mes-playlists/mes-playlists.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { AccueilComponent } from './accueil/accueil.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import {FormsModule} from '@angular/forms';
import { RechercheVideosComponent } from './recherche-videos/recherche-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MesPlaylistsComponent,
    NousContacterComponent,
    AccueilComponent,
    FilterPipe,
    RechercheVideosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
