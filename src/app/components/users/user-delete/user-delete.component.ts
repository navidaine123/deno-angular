import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatButtonModule } from '@angular/material/button';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  faTrash = faTrash;
  faTimes = faTimes;
  userName: string;
  constructor(
    private dialogRef: MatDialogRef<UserDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    console.log(data.user);
    this.userName = data.user.NormaliziedUsername;
  }

  ngOnInit(): void {

  }

  closeDialog(confirm: boolean): void {
    this.dialogRef.close(confirm);
  }

}
