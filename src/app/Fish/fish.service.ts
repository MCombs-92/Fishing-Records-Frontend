import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fish } from './fish';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  url = "http://localhost:53520/Fish/"

  list(): Observable<Fish[]> {
    return this.http.get(this.url+"List") as Observable<Fish[]>
  }

  get(id: number): Observable<Fish> {
    return this.http.get(this.url+"Get/"+id) as Observable<Fish>
  }

  create(fish: Fish): Observable<Fish> {
    return this.http.post(this.url+"Create", fish) as Observable<Fish>
  }

  change(fish: Fish): Observable<Fish> {
    return this.http.post(this.url+"Change", fish) as Observable<Fish>
  }

  remove(fish: Fish): Observable<Fish> {
    return this.http.post(this.url+"Remove", fish) as Observable<Fish>
  }


  constructor(private http: HttpClient) { }
}
