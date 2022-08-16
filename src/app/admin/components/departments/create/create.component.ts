import { Component, OnInit } from '@angular/core';
import { CreateDepartment } from 'src/app/concrats/createDepartment';
import { DepartmentService } from 'src/app/services/common/models/department.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private departmentService : DepartmentService) { }

  ngOnInit(): void {
  }
  create(txtName:HTMLInputElement){
    const createdepartment: CreateDepartment = new CreateDepartment();
    createdepartment.DepartmentName=txtName.value;
    
    this.departmentService.create(createdepartment, errorMessage => {
      alert(errorMessage);
    });
  }

}
