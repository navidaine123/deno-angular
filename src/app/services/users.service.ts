import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/register/register-response';
import { Observable } from 'rxjs';
import { UserModel } from '../models/users/user.model';
import { serialize } from 'object-to-formdata';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  register(model: RegisterModel): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(`${this.baseUrl}/users`, model);
  }

  getUsers(): Observable<any> {
    return this.http.get((`${this.baseUrl}/users`));
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete((`${this.baseUrl}/users/${id}`));
  }

}
