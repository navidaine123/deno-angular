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
    const formData = serialize(model);
    return this.http.post<RegisterModel>(`${this.baseUrl}/users`, formData);
  }

  getUsers(): Observable<Array<UserModel>> {
    return this.http.get<Array<UserModel>>(`${this.baseUrl}/users`);
  }

}
