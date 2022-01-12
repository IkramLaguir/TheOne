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
    const adr: string = 'http://localhost:3000/api/advertiser/login';
    return this.http.post<Data>(adr, data, { withCredentials: true });
  }

  signup(data: any): Observable<Data> {
    const adr: string = 'http://localhost:3000/api/advertiser/signup';
    return this.http.post<Data>(adr, data, { withCredentials: true });
  }

  create(data: any): Observable<Data> {
    const adr: string = 'http://localhost:3000/api/advertiser/create';
    return this.http.post<Data>(adr, data, { withCredentials: true });
  }

  getAllAd(id: string): Observable<Data> {
    const adr: string = 'http://localhost:3000/api/advertiser/getAdvert/' + id;
    return this.http.get<Data>(adr, { withCredentials: true });
  }

  getOneAd(id: any): Observable<Data> {
    const adr: string = 'http://localhost:3000/api/advertiser/ad/' + id;
    return this.http.get<Data>(adr, { withCredentials: true });
  }

  removeOneAd(id: any): Observable<Data> {
    const adr: string = 'http://localhost:3000/api/advertiser/ad/' + id;
    return this.http.delete<Data>(adr, { withCredentials: true });
  }
}
