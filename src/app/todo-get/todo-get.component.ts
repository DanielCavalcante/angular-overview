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

  ngOnInit() {
    this.ts.findAllTodos().subscribe((data: Todo[]) => this.todos = data);
  }

}
