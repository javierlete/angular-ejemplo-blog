import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POSTS } from '../mocks/post.mock';
import { Post } from '../modelos/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  servidor = 'http://localhost:3000';
  url = '/posts/';

  constructor(private http: HttpClient) { }

  get(): Observable<Post[]> {
    return this.http.get<Post[]>(this.servidor + this.url);
  }

  getByUserId(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.servidor + '/users/' + id + this.url);
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(this.servidor + this.url + id);

  }
}
