import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserAddComponent } from './user-add/user-add.component';
import { UserGetComponent } from './user-get/user-get.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoGetComponent } from './todo-get/todo-get.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';

import { TodosService } from './todos.service';
import { LoginComponent } from './login/login.component';

var config = {
  apiKey: "AIzaSyAzENW_0ONxCJh_yaL-1KH0bt7IaYOshBw",
  authDomain: "back-end-as-service.firebaseapp.com",
  databaseURL: "https://back-end-as-service.firebaseio.com",
  projectId: "back-end-as-service",
  storageBucket: "back-end-as-service.appspot.com",
  messagingSenderId: "981593524298"
};

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserGetComponent,
    UserUpdateComponent,
    TodoAddComponent,
    TodoGetComponent,
    TodoUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
