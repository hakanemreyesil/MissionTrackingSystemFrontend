import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-userauthorities',
  templateUrl: './userauthorities.component.html',
  styleUrls: ['./userauthorities.component.css']
})
export class UserauthoritiesComponent implements OnInit {

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
  }

}
