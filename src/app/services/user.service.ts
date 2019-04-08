import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../modelos/user.model';
import { USERS } from '../mocks/user.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get(): Observable<User[]> {
    return of(USERS);
  }
}
