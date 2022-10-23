import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;
  loginForm: FormGroup;

  constructor(private accountService: AccountService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router) {

    this.loginForm = fb.group({
      login: ['example@gmail.com', Validators.required],
      password: ['Qwer-1234', Validators.required]
    });
  }

  login() {
    console.log("Logining...");

    if (this.loginForm.invalid) {
      this.openSnackBar("Invalid data!");
      return;
    }

    this.accountService.login(this.loginForm.value).subscribe(result => {
      console.log(result);
      this.accountService.saveToken(result.token);
      this.router.navigate(["/"]);
    }, 
    error => {
      let message = error.error.Message;
      this.openSnackBar(message);
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 5 * 1000, // 5 sec
    });
  }
}
