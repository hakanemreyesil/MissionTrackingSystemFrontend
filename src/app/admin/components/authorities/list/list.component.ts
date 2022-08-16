import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListAuthority } from 'src/app/concrats/listAuthority';
import { AuthorityService } from 'src/app/services/common/models/authority.service';
import { UpdateComponent } from '../update/update.component';
export interface DialogData {
  name:string;
  id:string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
name:string;
  constructor(private authorityService: AuthorityService,public dialog: MatDialog) { }
  displayedColumns: string[] = ['authorityName', 'createdDate', 'updatedDate', 'delete', 'edit'];
  dataSource : MatTableDataSource<ListAuthority> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getAuthorities(){
    const allAuthorities: ListAuthority[]=  await this.authorityService.List(erorMessage=>{alert("list getirilemedi")})
    this.dataSource= new MatTableDataSource<ListAuthority>(allAuthorities);
    this.dataSource.paginator = this.paginator;
  }
  async delete(id:HTMLImageElement){
    let text = "Silmek istediğinize emin misiniz?";
  if (confirm(text) == true) {
    this.authorityService.Delete(this.authorityService,id)
    
    
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
  await this.getAuthorities();
  }
  

  openDialog(id:HTMLImageElement,name:HTMLInputElement): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '350px',
      data: {name: name,id:id},
    });

   
  }

}
