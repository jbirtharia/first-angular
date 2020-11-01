import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public status: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1,'Learn Java',true,new Date()),
    new Todo(2,'Learn Angular',false,new Date()),
    new Todo(3,'Learn Python',false,new Date()),
    new Todo(4,'Learn Node JS',false,new Date())
  ]

  constructor() { }

  ngOnInit() {
  }

}
