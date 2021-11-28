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
    console.log(obj);
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

  addVideo(obj: any): Observable<Data>{
    const adr : string = environment.url +'/addVideo'
    return this.http.post<Data>(adr, obj, { withCredentials: true });

  }


}
