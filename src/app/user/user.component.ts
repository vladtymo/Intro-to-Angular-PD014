import { IUser } from './../../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentUser: IUser = {
    email: "bargatga@gmail.com",
    username: "SuPer5454",
    birthdate: new Date(2000, 1, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
