import { UserModel } from './../../../models/users/user.model';
import { take } from 'rxjs/operators';
import { RegisterService as UserService } from '../../../services/register.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserDeleteComponent } from '../user-delete/user-delete.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'firstname', 'lastname', 'username', 'email', 'action'];
  dataSource: MatTableDataSource<UserModel>;
  users: UserModel[] = [];
  trash = faTrash;
  pen = faPen;

  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private userService: UserService,
    private dialog: MatDialog) {
  }

  ngAfterViewInit(): void {
    this.userService.getUsers().pipe(take(1)).subscribe((next: UserModel[]) => {
      this.users = next;
      this.dataSource = new MatTableDataSource(this.users);
    });
    this.dataSource.sort = this.sort;
  }

  ngEdit(id: string): void {

  }

  openDialog(user: UserModel): void {
    const conf = new MatDialogConfig();
    conf.data = { user };
    const dialogRef = this.dialog.open(UserDeleteComponent, conf);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(user.id).pipe(take(1)).subscribe(next => {
          this.dataSource.data = this.dataSource.data.filter(x => x.id !== user.id);
        });
      }
    });
  }

}

