import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor(private usersService: UsersService) {}

  //   @Input() users: string[];
  //   @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }
}
