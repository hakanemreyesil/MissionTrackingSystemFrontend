import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateUserMission } from 'src/app/concrats/createUserMission';
import { ListMission } from 'src/app/concrats/listMission';
import { ListUserMission } from 'src/app/concrats/listUserMission';
import { UsermissionService } from 'src/app/services/common/models/usermission.service';
import { DialogData } from '../list/list.component';
interface Userids {
  value: string;
  viewValue: string;
  
}
interface Missionids {
  value: string;
  viewValue: string;
  
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    private usermissionService : UsermissionService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ,
) { }


update(txtId:HTMLInputElement){
  const updatemission: ListUserMission = new ListUserMission();
  updatemission.id=txtId.value;
  updatemission.missionId=this.selectedmissionids;
  updatemission.userId=this.selecteduserid;
  
  
  this.usermissionService.Update(updatemission);
  // this.missionService.Update(updatemission);
  }

onNoClick(): void {
  this.dialogRef.close();
}
userids: Userids[] = [
  {value: '12e7d22c-f791-405f-b862-f99599155c3d', viewValue: 'Kemal Yeşil'},
  {value: '82082292-cbae-48a1-aba6-e935029f90d7', viewValue: 'Merve Yeşil'},
  {value: '84f3633d-b72e-4a7e-82ad-6700edd81199', viewValue: 'Fatma Yeşil'},
  {value: 'ec15cbf3-7a4f-481b-8fd1-aade23c90052', viewValue: 'Hakan Yeşil'},
  
];

selecteduserid: string;
selectUserId(event: Event) {
  this.selecteduserid = (event.target as HTMLSelectElement).value;
}

missionids: Missionids[] = [
  {value: '77f7060b-bb9a-4539-921e-15053da87dde', viewValue: 'görevler listesi'},
  {value: '30ef8820-fa7c-4ba7-9105-35757d115283', viewValue: 'Deneme22'},
 
];

selectedmissionids: string;
selectMissionids(event: Event) {
  this.selectedmissionids = (event.target as HTMLSelectElement).value;
}

}
