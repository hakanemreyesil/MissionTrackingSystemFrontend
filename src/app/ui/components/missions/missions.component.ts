import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { CreateComponent } from './create/create.component';

export interface DialogData {
  edit:string;
  content: string;
}
@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent  {
  
  content: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '350px',
      data: {content: this.content},
    });

   
  }
}


