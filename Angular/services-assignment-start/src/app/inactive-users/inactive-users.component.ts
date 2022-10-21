import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  users: string[] = [];
  constructor(private usersService: UsersService) {
    this.users = this.usersService.inactiveUsers;
  }
  //   @Input() users: string[];
  //   @Output() userSetToActive = new EventEmitter<number>();

  onSetToActive(id: number) {
    //  this.userSetToActive.emit(id);
    this.usersService.setToActive(id);
  }
}
