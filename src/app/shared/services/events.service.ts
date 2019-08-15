import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvent} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/events';
  }
  public getEvents(): Observable<Array<IEvent>> {
    return this.http.get<Array<IEvent>>(this.url);
  }
  public addEvent(newEvent: IEvent): Observable<Array<IEvent>> {
    return this.http.post<Array<IEvent>>(this.url, newEvent);
  }
  public delEvent(id: number): Observable<Array<IEvent>> {
    return this.http.delete<Array<IEvent>>(`${this.url}/${id}`);
  }
  public updateEvent(myEvent: IEvent): Observable<Array<IEvent>> {
    return this.http.put<Array<IEvent>>(`${this.url}/${myEvent.id}`, myEvent);
  }
}
