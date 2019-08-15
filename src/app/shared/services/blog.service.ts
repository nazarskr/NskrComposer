import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBlog } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url: string;
  public blog: Array<IBlog>;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/blog';
  }
  public getBlog(): Observable<Array<IBlog>> {
    return this.http.get<Array<IBlog>>(this.url);
  }
  public addBlogPost(blogPost: IBlog): Observable<Array<IBlog>> {
    return this.http.post<Array<IBlog>>(this.url, blogPost);
  }
  public delBlogPost(id: number): Observable<Array<IBlog>> {
    return this.http.delete<Array<IBlog>>(`${this.url}/${id}`);
  }
  public updateBlog(blogpost: IBlog): Observable<Array<IBlog>> {
    return this.http.put<Array<IBlog>>(`${this.url}/${blogpost.id}`, blogpost);
  }
}
