import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  angularForm: FormGroup;
  todo: any = {};

  constructor(private route: ActivatedRoute, private router: Router,
    private ts: TodosService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
   this.angularForm = this.fb.group({
     TodoDescription: ['', Validators.required],
     TodoDone: []
   })
  }

  updateTodo(TodoDescription, TodoDone) {
    console.log(TodoDone);
    this.route.params.subscribe(params => {
      this.ts.updateTodo(TodoDescription, TodoDone, params.id);
      this.router.navigate(['todos']);
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ts.findTodo(params['id']).subscribe(res => {
        this.todo = res;
      })
    })
  }

}
