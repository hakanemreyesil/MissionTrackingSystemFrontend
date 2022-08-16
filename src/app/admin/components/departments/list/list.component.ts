import { AfterViewInit, Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { timeout } from 'rxjs';
import { ListDepartment } from 'src/app/concrats/listDepartment';
import { DepartmentService } from 'src/app/services/common/models/department.service';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
declare var $:any;

export interface DialogData {
  edit:string;
  id:string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  edit:string;
  

  constructor(private departmentService: DepartmentService,public dialog: MatDialog) { }
  

  displayedColumns: string[] = ['name', 'createdDate', 'updateDate', 'delete', 'edit'];
  dataSource : MatTableDataSource<ListDepartment> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getDepartments(){
    const allDepartments: ListDepartment[]=  await this.departmentService.List(erorMessage=>{alert("list getirilemedi")})
    this.dataSource= new MatTableDataSource<ListDepartment>(allDepartments);
    this.dataSource.paginator = this.paginator;
  }
  async delete(id:HTMLImageElement){
    let text = "Silmek istediğinize emin misiniz?";
  if (confirm(text) == true) {
    this.departmentService.Delete(this.departmentService,id)
    
    
  } else {
    alert("silme işlemi başarısız")
  }
    
    // confirm("Silmek istediğinize emin misiniz?")

    // this.departmentService.Delete(this.departmentService,id)
    
  
    // this.departmentService.List(this.getDepartments);
  }
 

  async ngOnInit() {
    
  await this.getDepartments();
  
  }
  openDialog(id:HTMLImageElement,departmentName:HTMLInputElement): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '350px',
      data: {id:id, edit: departmentName},
    });

   
  }
}
  



