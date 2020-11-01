import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  //Injecting Router
  //Injecting HardcodedAuthenticationService through dependency injection
  constructor(private router: Router, private service: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(): void {
    
    console.log("Username : " + this.username);
    // if (this.username === 'jayendra' && this.password === '123') {
    if (this.service.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      var first = this.username.substr(0, 1).toUpperCase()
      this.router.navigate(['welcome', first + this.username.substr(1)]);
    }
    else {
      this.invalidLogin = true;
    }
  }

}
