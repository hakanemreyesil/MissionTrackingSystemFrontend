import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ListUserMission } from 'src/app/concrats/listUserMission';
import { UsermissionService } from 'src/app/services/common/models/usermission.service';
import { UpdateComponent } from '../update/update.component';

export interface DialogData {
  userid:string;
  missionid:string;
  id:string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userid:string;
  missionid:string;
  id:string;
  displayedColumns: string[] = ['userId','missionId', 'createdDate', 'updateDate','delete','edit' ];
  dataSource : MatTableDataSource<ListUserMission> = null;
  constructor(private usermissionService: UsermissionService,public dialog: MatDialog) { }

  async getUserMissions(){
    const allUserMissions: ListUserMission[]=  await this.usermissionService.List(erorMessage=>{alert("list getirilemedi")})
    
    // this.missions =new MatTableDataSource(allMissions);
    this.dataSource= new MatTableDataSource<ListUserMission>(allUserMissions);
    // this.dataSource.paginator = this.paginator;
   }

  async delete(id:HTMLImageElement){
     let text = "Silmek istediğinize emin misiniz?";
   if (confirm(text) == true) {
     this.usermissionService.Delete(this.usermissionService,id)
     
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
    await this.getUserMissions();
   }

   openDialog(missionid:HTMLInputElement,userid:HTMLInputElement,id:HTMLImageElement): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '350px',
      data: {userid:userid,missionid:missionid,id:id},
    });
  }
}
