import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any;
  passWord: any;
  constructor(private router: Router) {}

  ngOnInit() {
  }

  onClick () {
    console.log(this.userName)
    this.router.navigate(['toVote']);
  }
}
