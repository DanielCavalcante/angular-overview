import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  api = 'https://node-todo-dev.herokuapp.com/api/todos';

  constructor(private http: HttpClient) {

  }

  createTodo(TodoDescription) {
    const todo = {
      description: TodoDescription
    };
    this.http.post(`${this.api}`, todo).subscribe(res => console.log('Created'));
  }

  findAllTodos() {
    return this.http.get(`${this.api}`);
  }

  findTodo(id) {
    return this.http.get(`${this.api}/${id}`)
  }

  updateTodo(TodoDescription, id) {
    const todo = {
      description: TodoDescription
    };
    this.http.put(`${this.api}/${id}`, todo).subscribe(res => console.log('Updated!'));
  }

  deleteTodo(id) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
