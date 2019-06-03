import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

    // this gets called in the component. our api request
    getAllProducts(): Observable < any > {
      return this.http.get(this.baseurl + '/api/products',
        { headers: this.httpHeaders });

  }
}
