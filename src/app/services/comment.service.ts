import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../modelos/comentario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  servidor = 'http://localhost:3000'
  url = '/comments/';

  constructor(
    private http: HttpClient
  ) { }

  getCommentsByPostId(id: number): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.servidor + '/posts/' + id + '/comments');
  }
}
