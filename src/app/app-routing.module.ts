import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserGetComponent } from './user-get/user-get.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoGetComponent } from './todo-get/todo-get.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'users/create',
    component: UserAddComponent
  },
  {
    path: 'users',
    component: UserGetComponent
  },
  {
    path: 'users/:id',
    component: UserUpdateComponent
  },
  {
    path: 'todos/create',
    component: TodoAddComponent
  },
  {
    path: 'todos',
    component: TodoGetComponent
  },
  {
    path: 'todos/:id',
    component: TodoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
