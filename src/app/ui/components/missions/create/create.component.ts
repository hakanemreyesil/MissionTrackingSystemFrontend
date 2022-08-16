import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateMission } from 'src/app/concrats/createMission';
import { MissionService } from 'src/app/services/common/models/mission.service';
import { DialogData } from '../missions.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private missionService: MissionService,public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }
  create(txtContent:HTMLInputElement){
    const createmission: CreateMission = new CreateMission();
   
    createmission.Content=txtContent.value;
  
    this.missionService.create(createmission, errorMessage => {
      alert(errorMessage);
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
 
}
