import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginRequest, ILoginResponse } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl: string = "https://localhost:7076/api/";
  private readonly tokenKey: string = "tokenKey";

  constructor(private httpClient: HttpClient) { }

  login(model: ILoginRequest): Observable<ILoginResponse> {
    return this.httpClient.post<ILoginResponse>(this.apiUrl + "account/login", model);
  }
  logout(): void {
    this.httpClient.post(this.apiUrl + "account/logout", null);
    this.removeToken();
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  removeToken(): void {
    return localStorage.removeItem(this.tokenKey);
  }
}

