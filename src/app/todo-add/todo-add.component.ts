import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  angularForm: FormGroup;
  constructor(private fb: FormBuilder, private ts: TodosService) {
    this.createForm();
  }

  createForm() {
    this.angularForm = this.fb.group({
      TodoDescription: ['', Validators.required]
    })
  }

  createTodo(TodoDescription) {
    this.ts.createTodo(TodoDescription);
  }

  ngOnInit() {
  }

}
