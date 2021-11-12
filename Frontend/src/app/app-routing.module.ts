import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MesPlaylistsComponent} from './mes-playlists/mes-playlists.component';
import {NousContacterComponent} from './nous-contacter/nous-contacter.component';
import {AccueilComponent} from './accueil/accueil.component';
import {RechercheVideosComponent} from './recherche-videos/recherche-videos.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'recherche', component: RechercheVideosComponent},
  { path: 'playlists', component: MesPlaylistsComponent},
  { path: 'contact', component: NousContacterComponent},
  { path: '**', component: AccueilComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
