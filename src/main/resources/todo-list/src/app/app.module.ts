import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { UpdateWindowComponent } from './update-window/update-window.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateTodoComponent,
    HomepageComponent,
    ShowTodoComponent,
    UpdateWindowComponent
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
