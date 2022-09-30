import { IUser } from './../user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser: IUser = {
    email: "bargatga@gmail.com",
    username: "SuPer5454",
    birthdate: new Date(2000, 1, 1)
  }
}