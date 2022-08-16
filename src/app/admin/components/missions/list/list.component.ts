import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { ListMission } from 'src/app/concrats/listMission';
import { DepartmentService } from 'src/app/services/common/models/department.service';
import { MissionService } from 'src/app/services/common/models/mission.service';
import { UpdateComponent } from '../update/update.component';

export interface DialogData {
  content:string;
  id:string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  content:string;
  constructor(private missionService: MissionService,public dialog: MatDialog) { }

  displayedColumns: string[] = ['content', 'createdDate', 'updatedDate','isComplete' , 'delete', 'edit'];
  dataSource : MatTableDataSource<ListMission> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getMissions(){
    const allMissions: ListMission[]=  await this.missionService.List(erorMessage=>{alert("list getirilemedi")})
    this.dataSource= new MatTableDataSource<ListMission>(allMissions);
    this.dataSource.paginator = this.paginator;
  }
  async delete(id:HTMLImageElement){
    let text = "Silmek istediğinize emin misiniz?";
  if (confirm(text) == true) {
    this.missionService.Delete(this.missionService,id)
    
    
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
  await this.getMissions();
  }
  openDialog(id:HTMLImageElement,content:HTMLInputElement): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '350px',
      data: {content:content,id:id},
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
