import { UserListComponent } from './components/users/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
