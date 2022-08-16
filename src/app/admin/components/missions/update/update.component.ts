import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateMission } from 'src/app/concrats/createMission';
import { ListMission } from 'src/app/concrats/listMission';
import { MissionService } from 'src/app/services/common/models/mission.service';
import { DialogData } from '../list/list.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  {

  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    private missionService : MissionService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ,

) { }

update(txtcontent:HTMLInputElement,txtid:HTMLInputElement){
  const updatemission: ListMission = new ListMission();
  
  updatemission.content=txtcontent.value;
  updatemission.id=txtid.value;

  this.missionService.Update(updatemission);
  }

onNoClick(): void {
  this.dialogRef.close();
}

}
