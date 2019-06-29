import { Component, OnInit } from '@angular/core';
import Todo from '../Todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-get',
  templateUrl: './todo-get.component.html',
  styleUrls: ['./todo-get.component.css']
})
export class TodoGetComponent implements OnInit {

  todos: Todo[];
  constructor(private ts: TodosService) { }

  deleteTodo(id) {
    this.ts.deleteTodo(id).subscribe(res => {
      this.todos.splice(id, 1);
    })
  }

  ngOnInit() {
    this.ts.findAllTodos().subscribe((data: Todo[]) => this.todos = data);
  }

}
