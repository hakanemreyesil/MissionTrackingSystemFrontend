import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-usermissions',
  templateUrl: './usermissions.component.html',
  styleUrls: ['./usermissions.component.css']
})
export class UsermissionsComponent implements OnInit {

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
  }

}
