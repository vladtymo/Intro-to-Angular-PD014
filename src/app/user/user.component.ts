import { USERS, USERS_FROM_IT_STEP } from 'src/data/users';
import { IUser, RoleType } from './../../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: IUser[] = USERS;
  usersFromITStep: IUser[] = USERS_FROM_IT_STEP;
  currentUser: IUser;

  constructor() {
    this.currentUser = {
      username: '',
      email: '',
      birthdate: new Date(),
      role: RoleType.User
    };
  }

  ngOnInit(): void {
  }

  createUser(): void {
    if (this.currentUser)
      this.users.push({
        username: this.currentUser.username,
        email: this.currentUser.email,
        birthdate: this.currentUser.birthdate,
        role: RoleType.User
      });
  }
}
