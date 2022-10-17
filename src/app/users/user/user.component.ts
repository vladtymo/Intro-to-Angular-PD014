import { USERS, USERS_FROM_IT_STEP } from 'src/data/users';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: IUser[] = USERS;
  usersFromITStep: IUser[] = USERS_FROM_IT_STEP;

  constructor() {
  }

  ngOnInit(): void {
  }
}
