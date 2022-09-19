import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { CreateUser } from 'src/app/concrats/createUser';

import { UserService } from 'src/app/services/common/models/user.service';
interface Departments {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})

export class CreateComponent implements OnInit {
  constructor(private userService : UserService/*,private departmentService: DepartmentService*/) { }
  date = new FormControl(new Date());
  
 

  ngOnInit(): void {
  }
  create(txtName:HTMLInputElement,txtSurname:HTMLInputElement,txtPhoneNumber:HTMLInputElement,dates){
    const createuser: CreateUser = new CreateUser();
  
    createuser.name=txtName.value;
    createuser.surName=txtSurname.value;
    createuser.phoneNumber=txtPhoneNumber.value;
    createuser.departmentId=this.selectedDepartment;
    createuser.birthday=dates;
    console.log(createuser)
    this.userService.create(createuser, errorMessage => {
      alert(errorMessage);
    });
   
   
  }
// async list(){
//   const allDepartments: ListDepartment[]=  await this.departmentService.List(erorMessage=>{alert("list getirilemedi")})
//   this.dataSource= new MatTableDataSource<ListDepartment>(allDepartments);
// }
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
