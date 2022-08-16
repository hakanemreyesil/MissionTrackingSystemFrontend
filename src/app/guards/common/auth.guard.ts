import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/common/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private jwtHelper:JwtHelperService,private router:Router,private authService:AuthService){


  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token:string=localStorage.getItem("accessToken");

   // const decodeToken=this.jwtHelper.decodeToken(token);
    //const expirationDate:Date = this.jwtHelper.getTokenExpirationDate(token);
    let expired:boolean ;
    try{
      expired= this.jwtHelper.isTokenExpired(token);
    }catch{
      expired=true;
    }
    
    if(!token || expired){
      this.router.navigate(["login"],{queryParams:{returnUrl:state.url}});
      alert("Oturum Açmanız gerekiyor");
    }
    
    return true;
  }
  
}
