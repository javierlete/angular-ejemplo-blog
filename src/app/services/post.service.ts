import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POSTS } from '../mocks/post.mock';
import { Post } from '../modelos/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  get(): Observable<Post[]> {
    return of(POSTS);
  }

  getByUserId(id: number) {
    return of(POSTS.filter(post => post.userId === id));
  }
}
