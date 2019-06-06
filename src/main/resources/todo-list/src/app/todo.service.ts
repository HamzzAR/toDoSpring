import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {

  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  getAllToDo(): Observable<Todo[]> {
    return this.http.get<Todo[]>
    (this.apiUrl + 'getAllToDo');
  }
  getToDo(id: number): Observable<Todo> {
    return this.http.get<Todo>
    (this.apiUrl + 'getToDo/' + id);
  }

  updateToDo(todo: Todo): Observable<void> {
    return this.http.post<void>
    (this.apiUrl + 'updateToDo/', todo);
  }

  insertToDo(todo: Todo): Observable<void> {
    return this.http.post<void>
    (this.apiUrl + 'createToDo', todo);
  }
  deleteToDo(id: number): Observable<void> {
    return this.http.delete<void>
    (this.apiUrl + 'deleteToDo/' + id);

  }

}
