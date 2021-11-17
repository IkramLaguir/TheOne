import { Injectable } from '@angular/core';
import {Data} from "../data";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  addPlaylist(titrePlaylist : string): Observable<Data> {
    const adr: string = 'http://localhost:3001/addPlaylist/';
    return this.http.post<Data>(adr, titrePlaylist, { withCredentials: true });
  }


}
