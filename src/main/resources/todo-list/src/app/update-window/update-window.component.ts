import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { todos } from '../todos';

@Component({
  selector: 'app-update-window',
  templateUrl: './update-window.component.html',
  styleUrls: ['./update-window.component.css'],
  providers: [TodoService]
})
export class UpdateWindowComponent implements OnInit {

  constructor(private todoservice: TodoService) { }

  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  @Input()
  todo: Todo = { id: 0, content: ''};
  @Input()
  colorId = 1;
  @Output()
  hideEmitter = new EventEmitter<any>();
  @Input()
  sidebar = 'sidebar';

  ngOnInit() {
  }

  hideSideBar() {
    this.hideEmitter.emit();
  }

  onReturnKeyPressed(event: KeyboardEvent, contentToChange: string) {
    if (event.keyCode === 13) {
      this.updateTodo(contentToChange);
      return false;
    }
  }

  updateTodo(contentToChange: string) {
    this.todoservice.updateToDo({id: this.todo.id, content: contentToChange}).subscribe(data => {
      this.hideSideBar();
    });
  }

}
