import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<Data> {
    const adr: string = 'http://localhost:3000/api/admin/login';
    return this.http.post<Data>(adr, data, { withCredentials: true });
  }

  signup(data: any): Observable<Data> {
    const adr: string = 'http://localhost:3000/api/admin/signup';
    return this.http.post<Data>(adr, data, { withCredentials: true });
  }

  getAllAd(id: string): Observable<Data> {
    const adr: string = 'http://localhost:3000/api/admin/getAdvert/' + id;
    return this.http.get<Data>(adr, { withCredentials: true });
  }

  getOneAd(id: any): Observable<Data> {
    const adr: string = 'http://localhost:3000/api/admin/ad/' + id;
    return this.http.get<Data>(adr, { withCredentials: true });
  }

  validateAd(data: any): Observable<Data> {
    const adr: string = 'http://localhost:3000/api/admin/updateAdvert/';
    return this.http.post<Data>(adr, data, { withCredentials: true });
  }

  declineAd(data: any): Observable<Data> {
    const adr: string = 'http://localhost:3000/api/admin/updateAdvert/';
    return this.http.post<Data>(adr, data, { withCredentials: true });
  }
}
