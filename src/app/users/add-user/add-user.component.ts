import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser, RoleType } from 'src/user';
import { DateValidator } from 'src/app/validators/date-validator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  // 1 - using [(ngModel)]
  // currentUser: IUser;

  // 2 - using FormGroup and FormControl
  // userForm: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   email: new FormControl('example@gmail.com'),
  //   birthdate: new FormControl(new Date())
  // });

  // 3 - using FormBuilder
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    // this.currentUser = {
    //   username: '',
    //   email: '',
    //   birthdate: new Date(),
    //   role: RoleType.User
    // };
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['example@gmail.com', [Validators.required, Validators.email]],
      birthdate: [new Date(), DateValidator.LessThanToday]
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 5 * 1000, // 5 sec
    });
  }

  ngOnInit(): void {
  }

  createUser(): void {
    // if (this.currentUser)
    //   if (this.currentUser.username != '' && this.currentUser.email != '') {
    //     let user: IUser = {
    //       username: this.currentUser.username,
    //       email: this.currentUser.email,
    //       birthdate: this.currentUser.birthdate,
    //       role: RoleType.User
    //     };

    //     console.log(user);
    //   }

    if (this.userForm.invalid) {
      this.openSnackBar("Invalid data!");
      return;
    }
    let user: IUser = this.userForm.value;
    console.log(user); // only for test
    this.openSnackBar("User has been successfully created!");
  }
}
