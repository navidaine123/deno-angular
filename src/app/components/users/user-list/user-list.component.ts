import { take } from 'rxjs/operators';
import { RegisterService } from '../../../services/register.service';
import { UserModel } from '../../../models/users/user.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<UserModel>;
  users: UserModel[] = [];

  @ViewChild(MatSort) sort: MatSort;
  constructor(private registerService: RegisterService) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit(): void {
    this.registerService.getUsers().pipe(take(1)).subscribe(next => {
      this.users = next;
    });
    this.dataSource.sort = this.sort;
  }

}

