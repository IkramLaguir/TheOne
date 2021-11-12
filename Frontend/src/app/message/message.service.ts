import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Data} from '../data';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {}


}
