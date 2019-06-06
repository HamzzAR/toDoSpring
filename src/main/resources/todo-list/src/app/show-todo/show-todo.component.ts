import { Todo } from './../todo';
import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css'],
  providers: [TodoService]
})
export class ShowTodoComponent implements OnInit {
  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  todos = [];
  colorId = 0;
  observableTodos: Observable<Todo[]>;
  sidebar = 'hidden';
  todosidebar: Todo = { id: 0, content: ''};
  constructor(private todoservice: TodoService) {}
  deleteToDo(id: string) {
    this.todoservice.deleteToDo(+id).subscribe(data => {
      this.refreshTodos();
    });
  }

  showSideBar(todo: Todo, id: number) {
    this.sidebar = 'sidebar';
    this.todosidebar = todo;
    this.colorId = id;
  }

  hideSideBar() {
    this.sidebar = 'hidden';
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoservice.getAllToDo().subscribe(data => this.todos = data);
  }
  ngOnInit() {
   this.refreshTodos();
  }
}
