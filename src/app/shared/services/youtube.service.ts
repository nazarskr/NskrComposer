import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IYoutube } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/youtube';
  }

  public getYoutubeIds(): Observable<Array<IYoutube>> {
    return this.http.get<Array<IYoutube>>(this.url);
  }
  public addYoutubeId(video: IYoutube): Observable<Array<IYoutube>> {
    return this.http.post<Array<IYoutube>>(this.url, video);
  }
  public delYoutubeId(id: number): Observable<Array<IYoutube>> {
    return this.http.delete<Array<IYoutube>>(`${this.url}/${id}`);
  }
  public updateYoutubeId(video: IYoutube): Observable<Array<IYoutube>> {
    return this.http.put<Array<IYoutube>>(`${this.url}/${video.id}`, video);
  }
}
