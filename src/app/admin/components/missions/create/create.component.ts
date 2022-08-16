import { Component, OnInit } from '@angular/core';
import { CreateMission } from 'src/app/concrats/createMission';
import { MissionService } from 'src/app/services/common/models/mission.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private missionService : MissionService) { }
  ngOnInit(): void {
  }
  create(txtContent:HTMLInputElement){
    const createmission: CreateMission = new CreateMission();
   
    createmission.Content=txtContent.value;
  
    this.missionService.create(createmission, errorMessage => {
      alert(errorMessage);
    });
  }
}
