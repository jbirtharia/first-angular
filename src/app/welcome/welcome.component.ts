import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "welcome message"
  mssg : string = 'need help'
  constructor() { 
    console.log(this.message);
    console.log(this.mssg)
  }

  ngOnInit() {
    console.log(this.message);
  }

}
