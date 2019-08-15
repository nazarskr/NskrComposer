import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPiecesList } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PiecesListService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/piecesList';
  }
  public getPiecesList(): Observable<Array<IPiecesList>> {
    return this.http.get<Array<IPiecesList>>(this.url);
  }
  public addPiece(piece: IPiecesList): Observable<Array<IPiecesList>> {
    return this.http.post<Array<IPiecesList>>(this.url, piece);
  }
  public delPiece(id: number): Observable<Array<IPiecesList>> {
    return this.http.delete<Array<IPiecesList>>(`${this.url}/${id}`);
  }
  public updatePiecesList(piece: IPiecesList): Observable<Array<IPiecesList>> {
    return this.http.put<Array<IPiecesList>>(`${this.url}/${piece.id}`, piece);
  }
}
