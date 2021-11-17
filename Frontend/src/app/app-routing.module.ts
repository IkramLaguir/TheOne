import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LectureVideoComponent} from "./lecture-video/lecture-video.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {RechercheVideosComponent} from "./recherche-videos/recherche-videos.component";
import {NousContacterComponent} from "./nous-contacter/nous-contacter.component";
import {MesPlaylistsComponent} from "./mes-playlists/mes-playlists.component";

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'recherche', component: RechercheVideosComponent},
  { path: 'playlists', component: MesPlaylistsComponent},
  { path: 'contact', component: NousContacterComponent},
  { path: 'lecture', component: LectureVideoComponent},
  { path: '**', component: AccueilComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
