import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../modelos/user.model';
import { USERS } from '../mocks/user.mock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  servidor = 'http://localhost:3000';
  url = '/users/';

  constructor(private http: HttpClient) {}

  get(): Observable<User[]> {
    return this.http.get<User[]>(this.servidor + this.url);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(this.servidor + this.url + id);
  }
}
