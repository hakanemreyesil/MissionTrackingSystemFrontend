import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListUserAuthority } from 'src/app/concrats/listUserAuthority';
import { UserauthorityService } from 'src/app/services/common/models/userauthority.service';
import { UpdateComponent } from '../update/update.component';
export interface DialogData {
  userid:string;
  authid:string;
  id:string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userid:string;
  authid:string;
  constructor(private userAuthorityService: UserauthorityService,public dialog: MatDialog) { }
  displayedColumns: string[] = ['userId','authorityId', 'createdDate', 'updateDate', 'delete', 'edit'];
  dataSource : MatTableDataSource<ListUserAuthority> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getAuthorities(){
    const allUserAuthorities: ListUserAuthority[]=  await this.userAuthorityService.List(erorMessage=>{alert("list getirilemedi")})
    this.dataSource= new MatTableDataSource<ListUserAuthority>(allUserAuthorities);
    this.dataSource.paginator = this.paginator;
  }
  async delete(id:HTMLImageElement){
    let text = "Silmek istediğinize emin misiniz?";
  if (confirm(text) == true) {
    this.userAuthorityService.Delete(this.userAuthorityService,id)
    
    
  } else {
    alert("silme işlemi başarısız")
  }
    
    // confirm("Silmek istediğinize emin misiniz?")

    // this.departmentService.Delete(this.departmentService,id)
    
  
    // this.departmentService.List(this.getDepartments);
  }
 

  async ngOnInit() {
    
  await this.getAuthorities();
  
  }

openDialog(id:HTMLImageElement,authId:HTMLInputElement,userId:HTMLInputElement): void {
  const dialogRef = this.dialog.open(UpdateComponent, {
    width: '350px',
    data: {userid:userId,authid:authId,id:id},
  });

 
}
}
