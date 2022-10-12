import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'username',
  templateUrl: './username.component.html',
  styles: [],
})
export class UsernameComponent implements OnInit {
  username = '';
  constructor() {}

  resetUsername(): void {
    this.username = '';
  }

  usernameLogger(): void {
    console.log(this.username);
  }
  ngOnInit(): void {}
}
