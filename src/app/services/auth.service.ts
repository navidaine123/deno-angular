import { serialize } from 'object-to-formdata';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel, LoginResponse } from '../models/auth/login-model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenKey = 'access-token';
  baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  login(model: LoginModel): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/Login`, model);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }
}
