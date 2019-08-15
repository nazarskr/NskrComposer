import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/entrance';
  }
  public getEntrance(): Observable<ILogin> {
    return this.http.get<ILogin>(this.url);
  }
  public saveEntrance(entrance: ILogin): Observable<ILogin> {
    return this.http.post<ILogin>(this.url, entrance);
  }
}
