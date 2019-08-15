import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBio } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BioService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/bio';
  }
  public getBio(): Observable<IBio> {
    return this.http.get<IBio>(this.url);
  }
  public saveBio(text: IBio): Observable<IBio> {
    return this.http.post<IBio>(this.url, text);
  }
}
