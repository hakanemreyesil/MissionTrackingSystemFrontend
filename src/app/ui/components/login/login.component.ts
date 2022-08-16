import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/common/auth.service';
import { RegisterService } from 'src/app/services/common/models/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private registerService : RegisterService, private authService: AuthService,private activatedRoute:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
  }
  async login(usernameOrEmail:string,password:string){

  await this.registerService.login(usernameOrEmail,password,()=>{
    this.authService.identityCheck();
    this.activatedRoute.queryParams.subscribe(params=>{
      const returnUrl:string = params["returnUrl"];
      if(returnUrl)
      this.router.navigate([returnUrl]);

    })
  });
  
  }
}
