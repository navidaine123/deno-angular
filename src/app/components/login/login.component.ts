import { RegisterService } from '../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginModel } from '../../models/auth/login-model';
import { RegisterModel } from '../../models/register/register-response';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mode = 'signIn';
  loginModel: LoginModel | any = {};
  registerModel: RegisterModel | any = {};
  test: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private registerService: RegisterService) { }

  ngOnInit(): void {
  }


  setMode(mode: string): void {
    this.mode = mode;
  }
  login(): void {
    this.authService.login(this.loginModel).pipe(take(1)).subscribe(next => {
      this.authService.setToken(next.token);
      this.router.navigate(['']);
    },
      error => {
        console.log(error);
      });
  }

  register(): void {
    this.registerService.register(this.registerModel).pipe(take(1)).subscribe(next => {
      this.authService.setToken(next.token);
      this.router.navigate(['']);
    },
      error => {
        console.log(error);
      }
    );
  }
}
