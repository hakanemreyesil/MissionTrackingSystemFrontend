import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListUser } from 'src/app/concrats/listUser';
import { UserService } from 'src/app/services/common/models/user.service';
import { UpdateComponent } from '../update/update.component';
export interface DialogData {
  id:string;
  name:string;
  surname:string;
  phonenumber:string;
  departmentid:string;
  birthday:Date;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  id:string;
  name:string;
  surname:string;
  phonenumber:string;
  departmentid:string;
  birthday:Date;
  constructor(private userService: UserService,public dialog: MatDialog) { }

  displayedColumns: string[] = ['name','surname','birthDay','phoneNumber','departmentId', 'createdDate', 'updatedDate', 'delete', 'edit'];
  dataSource : MatTableDataSource<ListUser> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getUsers(){
    const allUsers: ListUser[]=  await this.userService.List(erorMessage=>{alert("list getirilemedi")})
    this.dataSource= new MatTableDataSource<ListUser>(allUsers);
    this.dataSource.paginator = this.paginator;
  }
  async delete(id:HTMLImageElement){
    let text = "Silmek istediğinize emin misiniz?";
  if (confirm(text) == true) {
    this.userService.Delete(this.userService,id)
    
    
  } else {
    alert("silme işlemi başarısız")
  }
    
    // confirm("Silmek istediğinize emin misiniz?")

    // this.departmentService.Delete(this.departmentService,id)
    
  
    // this.departmentService.List(this.getDepartments);
  }
 

  async ngOnInit() {
  // const allMissions:ListMission[] = await  this.missionService.List();
  // this.dataSource = new MatTableDataSource<ListMission>(allMissions);
  await this.getUsers();
  }
  openDialog(id:HTMLImageElement,name:HTMLInputElement,surName:HTMLInputElement,phoneNumber:HTMLInputElement,departmentId:HTMLInputElement,birthDay:HTMLInputElement): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '350px',
      data: {id:id,name:name,surname:surName,phonenumber:phoneNumber,departmentid:departmentId,birthday:birthDay},
      
    }); 
    
    dialogRef.afterClosed().subscribe( result => {
      
      //this.content = result.value;
      //this.dataSource= new MatTableDataSource<ListMission>(findMissions);
      //this.content=result;
       // console.log(id,this.content);
       //debugger
      });
  }

}
