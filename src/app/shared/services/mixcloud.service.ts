import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMixcloud } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MixcloudService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/mixcloud';
  }

  public getMixcloudSrc(): Observable<Array<IMixcloud>> {
    return this.http.get<Array<IMixcloud>>(this.url);
  }
  public addMixcloudSrc(track: IMixcloud): Observable<Array<IMixcloud>> {
    return this.http.post<Array<IMixcloud>>(this.url, track);
  }
  public delMixcloudSrc(id: number): Observable<Array<IMixcloud>> {
    return this.http.delete<Array<IMixcloud>>(`${this.url}/${id}`);
  }
  public updateMixcloudSrc(track: IMixcloud): Observable<Array<IMixcloud>> {
    return this.http.put<Array<IMixcloud>>(`${this.url}/${track.id}`, track);
  }
}
