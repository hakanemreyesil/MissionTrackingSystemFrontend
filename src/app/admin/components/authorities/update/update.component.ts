import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateAuthority } from 'src/app/concrats/createAuthority';
import { ListAuthority } from 'src/app/concrats/listAuthority';
import { AuthorityService } from 'src/app/services/common/models/authority.service';
import { DialogData } from '../list/list.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  {

  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    private authrityService : AuthorityService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ,
) { }
update(txtautName:HTMLInputElement,txtId:HTMLInputElement){
  const updateauthority: ListAuthority = new ListAuthority();
  updateauthority.id=txtId.value;
  updateauthority.authorityName=txtautName.value;
  
  
  
  this.authrityService.Update(updateauthority);
  // this.missionService.Update(updatemission);
  }

onNoClick(): void {
  this.dialogRef.close();
}

}
