import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { create } from 'domain';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'create-todo', component: CreateTodoComponent },
  { path: 'show-todo', component: ShowTodoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
