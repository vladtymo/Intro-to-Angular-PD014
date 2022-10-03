import { IUser } from './../../user';
import { Component } from '@angular/core';
import { USERS } from 'src/data/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  currentUser: IUser;
  users: IUser[] = USERS;

  constructor() {
    this.currentUser = {
      username: '',
      email: '',
      birthdate: new Date()
    };
  }

  removeLastItem(user: IUser): void {
    const index = this.users.indexOf(user, 0);
    if (index != -1) {
      this.users.splice(index, 1);
    }
  }

  createUser(): void {
    if (this.currentUser)
      console.log(this.currentUser);
    this.users.push(this.currentUser);
  }
}