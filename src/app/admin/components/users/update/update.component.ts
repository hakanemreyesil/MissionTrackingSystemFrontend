import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListUser } from 'src/app/concrats/listUser';
import { UserService } from 'src/app/services/common/models/user.service';
import { DialogData } from '../list/list.component';

interface Departments {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  
  constructor(private userService : UserService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    
) { }

date = new FormControl(new Date());
update(txtid:HTMLInputElement,txtName:HTMLInputElement,txtSurname:HTMLInputElement,txtPhoneNumber:HTMLInputElement,dates){
  const updateuser: ListUser = new ListUser();
  updateuser.id=txtid.value;
  updateuser.name=txtName.value;
  updateuser.surName=txtSurname.value;
  updateuser.birthday=dates;
  updateuser.phoneNumber=txtPhoneNumber.value;
  updateuser.departmentId=this.selectedDepartment;
  this.userService.Update(updateuser);
  
  }

onNoClick(): void {
  this.dialogRef.close();
  
}

departments: Departments[] = [
  {value: '75fb6ef9-22b8-4a7e-8350-71ee54ee4159', viewValue: 'Yönetici'},
  {value: '40426a99-c63e-4c42-b244-1d6abad48547', viewValue: 'Bilgi İşlem'},
  {value: '2af65e97-a881-4561-b0c1-e5f9c20882b8', viewValue: 'İnsan Kaynakları'},
  {value: 'b19fcd6d-1e6b-4011-a2da-db1c94d80c2f', viewValue: 'Müdür'},
  {value: 'f97f4e08-34e2-4d44-b82c-de199560a22d', viewValue: 'Hizmet Görevli'},
];

selectedDepartment: string;
selectDepartment(event: Event) {
  this.selectedDepartment = (event.target as HTMLSelectElement).value;
}

}
