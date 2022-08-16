import { Component, OnInit } from '@angular/core';
import { CreateUserAuthority } from 'src/app/concrats/createUserAuthority';
import { UserauthorityService } from 'src/app/services/common/models/userauthority.service';
interface Userids {
  value: string;
  viewValue: string;
  
}
interface Authorityids {
  value: string;
  viewValue: string;
  
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private userauthoritiesService: UserauthorityService) { }

  ngOnInit(): void {
  }
  create(){
    const createuserauthority: CreateUserAuthority = new CreateUserAuthority();
   
    createuserauthority.authorityId=this.selectedauthorityids;
    createuserauthority.userId=this.selecteduserid;
  
    this.userauthoritiesService.create(createuserauthority, errorMessage => {
      alert(errorMessage);
    });
  }
  userids: Userids[] = [
    {value: '12e7d22c-f791-405f-b862-f99599155c3d', viewValue: 'Kemal Yeşil'},
    {value: '82082292-cbae-48a1-aba6-e935029f90d7', viewValue: 'Merve Yeşil'},
    {value: '84f3633d-b72e-4a7e-82ad-6700edd81199', viewValue: 'Fatma Yeşil'},
    {value: 'ec15cbf3-7a4f-481b-8fd1-aade23c90052', viewValue: 'Hakan Yeşil'},
    
  ];
  
  selecteduserid: string;
  selectUserId(event: Event) {
    this.selecteduserid = (event.target as HTMLSelectElement).value;
  }

  authorityids: Authorityids[] = [
    {value: '6ed19b65-a345-4f5b-a726-01522ad52b1a', viewValue: 'ekleme'},
    {value: 'fcd3fc7e-880d-49a4-8d39-b52ccc6ca5bc', viewValue: 'silme'},
   
  ];
  
  selectedauthorityids: string;
  selectAuthorityids(event: Event) {
    this.selectedauthorityids = (event.target as HTMLSelectElement).value;
  }

}
