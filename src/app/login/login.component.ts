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

  onClick() {
    if (this.userName === 'admin' && this.passWord === 'admin') {
      this.router.navigate(['toVote']);
    }
  }
}
