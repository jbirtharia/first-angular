import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'jayendra';
  password: string = '';
  errorMessage: string = 'Invalid Credentials';
  invalidLogin: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleLogin(): void {
    console.log(this.username);

    if (this.username === 'jayendra' && this.password === '123') {
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

}
