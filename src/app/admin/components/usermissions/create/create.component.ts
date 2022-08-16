import { Component, OnInit } from '@angular/core';
import { CreateUserMission } from 'src/app/concrats/createUserMission';
import { UsermissionService } from 'src/app/services/common/models/usermission.service';
interface Userids {
  value: string;
  viewValue: string;
  
}
interface Missionids {
  value: string;
  viewValue: string;
  
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private usermissionService: UsermissionService) { }

  ngOnInit(): void {
  }
  create(){
    const createusermission: CreateUserMission = new CreateUserMission();
   
    createusermission.missionId=this.selectedmissionids;
    createusermission.userId=this.selecteduserid;
  
    this.usermissionService.create(createusermission, errorMessage => {
      alert(errorMessage);
    });
  }
  userids: Userids[] = [
    {value: '12e7d22c-f791-405f-b862-f99599155c3d', viewValue: 'Kemal Yeşil'},
    {value: '82082292-cbae-48a1-aba6-e935029f90d7', viewValue: 'Merve Yeşil '},
    {value: '84f3633d-b72e-4a7e-82ad-6700edd81199', viewValue: 'Fatma Yeşil'},
    {value: 'ec15cbf3-7a4f-481b-8fd1-aade23c90052', viewValue: 'Hakan Yeşil'},
    
  ];
  
  selecteduserid: string;
  selectUserId(event: Event) {
    this.selecteduserid = (event.target as HTMLSelectElement).value;
  }

  missionids: Missionids[] = [
    {value: '77f7060b-bb9a-4539-921e-15053da87dde', viewValue: 'görevler listesi'},
    {value: '30ef8820-fa7c-4ba7-9105-35757d115283', viewValue: 'Deneme22'},
   
  ];
  
  selectedmissionids: string;
  selectMissionids(event: Event) {
    this.selectedmissionids = (event.target as HTMLSelectElement).value;
  }
}
