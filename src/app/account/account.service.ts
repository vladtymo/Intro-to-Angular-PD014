import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginRequest, ILoginResponse } from './account';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly contollerRoute: string;
  private readonly tokenKey: string = "tokenKey";

  constructor(private httpClient: HttpClient) {
    this.contollerRoute = environment.apiUrl + 'account/';
  }

  login(model: ILoginRequest): Observable<ILoginResponse> {
    return this.httpClient.post<ILoginResponse>(this.contollerRoute + "login", model);
  }
  logout(): void {
    this.httpClient.post(this.contollerRoute + "logout", null);
    this.removeToken();
  }

  isAuthenticated(): boolean {
    return this.getToken() != null;
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

