import { TodoCreateStatus } from './../todo-create-status.enum';
import { TodoService } from './../todo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../todo';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Key } from 'protractor';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
  providers: [TodoService]
})
export class CreateTodoComponent implements OnInit, OnDestroy {

  createTodoForm: FormGroup;
  showMessage = false;
  errorDescription = 'No error information available';
  seconds;
  countDownInterval;
  todoCreateStatus: TodoCreateStatus;
  tds = TodoCreateStatus;
  onSubmit() {
    if (!this.createTodoForm.valid) { return false; }
    // Send new todo to server.
    this.todoService.insertToDo(this.createTodoForm.value)
    .subscribe(data => {
      this.todoCreateStatus = TodoCreateStatus.SUCCESS;
    },
    (error: HttpErrorResponse) => {
      this.errorDescription = error.message;
      this.todoCreateStatus = TodoCreateStatus.FAILURE;
    });
    this.startCountdown();
    this.createTodoForm.reset();
    this.showMessage = true;
  }
  startCountdown() {
    clearInterval(this.countDownInterval);
    this.seconds = 5;
    this.countDownInterval = setInterval(() => {
      if (this.seconds > 0) {
        --this.seconds;
      } else {
        clearInterval(this.countDownInterval);
        this.showMessage = false;
      }
    }, 1000);
  }
  onReturnKeyPressed(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.onSubmit();
      return false;
    }
  }
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private location: Location
    ) {
      this.todoService = todoService;
      this.createTodoForm = this.formBuilder.group({
        content: ''
      });
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.countDownInterval);
  }

}
