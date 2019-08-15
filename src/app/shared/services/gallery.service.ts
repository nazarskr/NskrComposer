import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GALLERY_IMAGE } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private url: string;
  public gallery: Array<GALLERY_IMAGE>;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/gallery';
  }
  public getGallery(): Observable<Array<GALLERY_IMAGE>> {
    return this.http.get<Array<GALLERY_IMAGE>>(this.url);
  }
  public addToGallery(image: GALLERY_IMAGE): Observable<Array<GALLERY_IMAGE>> {
    return this.http.post<Array<GALLERY_IMAGE>>(this.url, image);
  }
  public delFromGallery(id: number): Observable<Array<GALLERY_IMAGE>> {
    return this.http.delete<Array<GALLERY_IMAGE>>(`${this.url}/${id}`);
  }
  public updateGallery(image: GALLERY_IMAGE): Observable<Array<GALLERY_IMAGE>> {
    return this.http.put<Array<GALLERY_IMAGE>>(`${this.url}/${image.id}`, image);
  }
}
