import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;
  loginForm: FormGroup;

  constructor(private accountService: AccountService, private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.loginForm = fb.group({
      email: ['mainadmin@gmail.com', Validators.required],
      password: ['mainAdmin_1703', Validators.required]
    });
  }

  login() {
    console.log("Logining...");

    if (this.loginForm.invalid) {
      this.openSnackBar("Invalid data!");
      return;
    }

    this.accountService.login(this.loginForm.value).subscribe(res => {
      console.log(res);
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 5 * 1000, // 5 sec
    });
  }
}
