import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserDeleteComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    UsersRoutingModule,
    FontAwesomeModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
  ],
  providers: []
})
export class UsersModule { }
