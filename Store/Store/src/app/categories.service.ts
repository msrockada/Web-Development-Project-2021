import { Injectable } from '@angular/core';
import { Category, LoginResponse } from './interfaces/category';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  BASE_URL = 'http://localhost:8000'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8000/api/categories/');
  }
  login(email, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/obtain_token/`, {
      email,
      password
    })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
    };
  }
}