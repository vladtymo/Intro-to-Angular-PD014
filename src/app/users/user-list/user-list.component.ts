import { IUser, RoleType } from '../../../user';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Input() users: IUser[] = [];

  constructor() {
  }

  removeItem(user: IUser): void {
    const index = this.users.indexOf(user, 0);
    if (index != -1) {
      this.users.splice(index, 1);
    }
  }

  isAdmin(user: IUser): boolean {
    return user.role == RoleType.Admin;
  }
}