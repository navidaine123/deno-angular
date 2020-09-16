import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
