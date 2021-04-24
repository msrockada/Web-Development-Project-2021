import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './interfaces/User';
import { HttpClient} from '@angular/common/http';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'login'
  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8000/api/get/`)
    .pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  // getUser(username: string): Observable<User> {
  //   return of(users.find(user => user.username === username));
  // }

  getAll() {
    return this.http.get<User[]>(`/users`);
}

  register(user: User) {
    console.log(user)
    return this.http.post(`http://localhost:8000/api/create/`, user);
}
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    console.error(error);

    return of(result as T);
    };
  }

}
