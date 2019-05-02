import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rod } from './Rod';

@Injectable({
  providedIn: 'root'
})
export class RodService {


  url = "http://localhost:53520/Rods/"

  list(): Observable<Rod[]> {
    return this.http.get(this.url+"List") as Observable<Rod[]>
  }

  get(id: number): Observable<Rod> {
    return this.http.get(this.url+"Get/"+id) as Observable<Rod>
  }

  create(Rod: Rod): Observable<Rod> {
    return this.http.post(this.url+"Create", Rod) as Observable<Rod>
  }

  change(Rod: Rod): Observable<Rod> {
    return this.http.post(this.url+"Change", Rod) as Observable<Rod>
  }

  remove(Rod: Rod): Observable<Rod> {
    return this.http.post(this.url+"Remove", Rod) as Observable<Rod>
  }


  constructor(private http: HttpClient) { }
}

