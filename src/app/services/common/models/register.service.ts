
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Token } from 'src/app/concrats/token/token';
import { Create_User } from 'src/app/concrats/users/create_user';
import { User } from 'src/app/entities/user';
import { AuthService } from '../auth.service';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClientService:HttpClientService,private authService:AuthService) { }


 async create(user:User):Promise<Create_User>{
   const observable : Observable<Create_User | User> = this.httpClientService.post<Create_User | User>({
      controller:"registers"
    },user);

   return await firstValueFrom(observable) as Create_User;
  }
  async login(userNameOrEmail:string,password:string,callBackFunction?:()=>void):Promise<any>{
    const observable : Observable<any | Token>= this.httpClientService.post<any | Token >({
      controller:"registers",
      action:"login"
    },{userNameOrEmail,password})

    const data = await firstValueFrom(observable);
    const token:Token = data.token as Token;
    if(token){
      
      localStorage.setItem("accessToken",token.accessToken);

      alert("Giriş Başarılı");
      
    }
  callBackFunction();
  }

}
