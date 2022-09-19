import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from './create/create.component';
export interface DialogData {
  userId:string;
  missionId: string;
}
@Component({
  selector: 'app-usermissions',
  templateUrl: './usermissions.component.html',
  styleUrls: ['./usermissions.component.css']
})
export class UsermissionsComponent implements OnInit {
  userId:string;
  missionId: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '350px',
      data: {userId: this.userId, missionId : this.missionId},
    });
  }
}
