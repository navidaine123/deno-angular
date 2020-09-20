import { map, take, tap } from 'rxjs/operators';
import { RegisterService as UserService } from '../../../services/register.service';
import { UserModel } from '../../../models/users/user.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';


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
  constructor(private userService: UserService) {
    this.dataSource = new MatTableDataSource(this.users);
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
  ngDelete(id: string): void {

  }

}

