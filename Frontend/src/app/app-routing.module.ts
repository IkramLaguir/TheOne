import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LectureVideoComponent} from "./lecture-video/lecture-video.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {RechercheVideosComponent} from "./recherche-videos/recherche-videos.component";
import {MesPlaylistsComponent} from "./mes-playlists/mes-playlists.component";
import {SeConnecterComponent} from "./se-connecter/se-connecter.component";
import {InscriptionComponent} from "./inscription/inscription.component";

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'recherche', component: RechercheVideosComponent},
  { path: 'playlists', component: MesPlaylistsComponent},
  { path: 'lecture', component: LectureVideoComponent},
  { path: 'connect', component: SeConnecterComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: '', component: AccueilComponent},




  { path: '**', component: AccueilComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
