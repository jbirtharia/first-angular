import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='jayendra'
  password=''

  constructor() { }

  ngOnInit() {
  }

  handleLogin():void{
    console.log(this.username);
  }

}
