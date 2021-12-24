import { Injectable } from '@angular/core';
import {Data} from "../data";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  // add Playlist to bdd

  addPlaylist(obj : Object): Observable<Data> {
    const adr: string = environment.url + '/create';
    return this.http.post<Data>(adr, obj, { withCredentials: true });
  }

  // se connecter via un email + password

  login(data: any): Observable<Data> {
    const adr: string = environment.url +'/login';
    return this.http.post<Data>(adr, data, { withCredentials: true });
  }

  // afficher les playlists créés par l'utilisateur

  getAllPlaylist(userId : any):Observable<Data>{
    const adr : string = environment.url + '/playlists/'+ userId;
    return this.http.get<Data>(adr, { withCredentials: true });
  }
  // Ajouter une vidéo à une playlist
  addVideo(obj: any): Observable<Data>{
    const adr : string = environment.url +'/addVideo'
    return this.http.post<Data>(adr, obj, { withCredentials: true });

  }
  // Supprimer une playlist
  deletePlaylist(playlistId : any): Observable<Data>{
    const adr : string = environment.url +'/deletePlaylist/' + playlistId ;
    return this.http.delete<Data>(adr, { withCredentials: true });
  }
  // Récupérer toutes les vidéos ajoutées dans une playlist
  getAllVideos(playlistId : any):Observable<Data>{
    const adr : string = environment.url + '/videos/'+ playlistId;
    return this.http.get<Data>(adr, { withCredentials: true });
  }

  // Récupérer les adverts pour un utilisateur connecté

  getAdvertConnected(userId : any):Observable<Data>{
    const adr : string = environment.url + '/advert/'+ userId;
    return this.http.get<Data>(adr, { withCredentials: true });
  }
  // Récupérer les adverts pour un utilisateur non connecté

  getAdvertNotConnected():Observable<Data>{
    const adr : string = environment.url + '/advert';
    return this.http.get<Data>(adr, { withCredentials: true });
  }

  //Supprimer une vidéo

  deleteVideo(playlistId : any, videoId : any): Observable<Data>{
    const adr : string = environment.url +'/deleteVideo/' + playlistId + videoId ;
    return this.http.delete<Data>(adr, { withCredentials: true });
  }


}
