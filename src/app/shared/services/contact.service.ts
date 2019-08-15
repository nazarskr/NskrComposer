import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMessage } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/messages';
  }
  public getMessages(): Observable<Array<IMessage>> {
    return this.http.get<Array<IMessage>>(this.url);
  }
  public addMessage(message: IMessage): Observable<Array<IMessage>> {
    return this.http.post<Array<IMessage>>(this.url, message);
  }
  public delMessage(id: number): Observable<Array<IMessage>> {
    return this.http.delete<Array<IMessage>>(`${this.url}/${id}`);
  }
  public updateMessage(message: IMessage): Observable<Array<IMessage>> {
    return this.http.put<Array<IMessage>>(`${this.url}/${message.id}`, message);
  }
}
