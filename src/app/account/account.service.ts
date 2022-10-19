import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl: string = "http://webApi-Keyboard.somee.com/api/";

  constructor(private httpClient: HttpClient) { }

  login(model: ILoginRequest): Observable<ILoginResponse> {
    return this.httpClient.post<ILoginResponse>(this.apiUrl + "account/login", model);
  }
}

interface ILoginRequest {
  login: string;
  password: string;
}

interface ILoginResponse {
  token: string,
  name: string
}