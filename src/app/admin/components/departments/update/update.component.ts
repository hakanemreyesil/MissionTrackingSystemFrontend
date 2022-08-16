import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateDepartment } from 'src/app/concrats/createDepartment';
import { ListDepartment } from 'src/app/concrats/listDepartment';
import { DepartmentService } from 'src/app/services/common/models/department.service';
import { DialogData } from '../list/list.component';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    private departmentService : DepartmentService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ,) {}

    update(txtdepartmentName:HTMLInputElement,txtId:HTMLInputElement){
      const updatedepartment: ListDepartment = new ListDepartment();
      updatedepartment.id=txtId.value;
      updatedepartment.DepartmentName=txtdepartmentName.value;
   
      this.departmentService.Update(updatedepartment);
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
  

}
