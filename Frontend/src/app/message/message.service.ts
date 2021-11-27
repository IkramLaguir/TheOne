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

  addPlaylist(titrePlaylist : string): Observable<Data> {
    const adr: string = environment.url + '/addPlaylist/';
    return this.http.post<Data>(adr, titrePlaylist, { withCredentials: true });
  }

  login(data: any): Observable<Data> {
    const adr: string = 'http://localhost:3000/api/user/login';
    return this.http.post<Data>(adr, data, { withCredentials: true });
  }

}
