import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUser } from 'src/app/concrats/createUser';
import { ListUser } from 'src/app/concrats/listUser';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService:HttpClientService) { }

  create(department: CreateUser,errorCallBack?:(errorMessage: string)=> void ){
    this.httpClientService.post({
      controller:"users"

    },department).subscribe(result =>{
      alert("başarılı");
    },(errorResponse:HttpErrorResponse ) => {
      const _error:Array<{key:string, value:Array<string>}> =errorResponse.error;
      let message = "";
      _error.forEach((v,index)=>{
        v.value.forEach((_v,_index)=>{
          message += `${_v }
          `;
        });
      });
      errorCallBack(message);
    });
    

  }

  async List(errorCallBack?: (errorMessage:string)=> void): Promise<ListUser[]>{
    const promiseData:Promise<ListUser[]> = this.httpClientService.get<ListUser[]>({
      controller:"users"
    }).toPromise();
    promiseData.then()
    .catch((errorResponse: HttpErrorResponse)=> errorCallBack(errorResponse.message))
    return await promiseData;
  }
  Delete(user:UserService,id){
    this.httpClientService.delete({
      controller:"users"

    },id).subscribe(data=> {
      console.log(data),
      alert("başarılı");
    });
    
  }
  Update(user:ListUser){
    this.httpClientService.put({
      controller:"users"
    },user).subscribe(data => {
      alert("başarılı");
    })

  }
}
