import { Component, OnInit } from '@angular/core';
import { CreateAuthority } from 'src/app/concrats/createAuthority';
import { AuthorityService } from 'src/app/services/common/models/authority.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private authorityService : AuthorityService) { }

  ngOnInit(): void {
  
  }
  create(txtAuthorityName:HTMLInputElement){
    const createauthority: CreateAuthority = new CreateAuthority();
   
    createauthority.authorityName=txtAuthorityName.value;
  
    this.authorityService.create(createauthority, errorMessage => {
      alert(errorMessage);
    });
  }
 }

