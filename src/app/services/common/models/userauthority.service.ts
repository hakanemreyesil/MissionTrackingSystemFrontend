import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserAuthority } from 'src/app/concrats/createUserAuthority';
import { ListUserAuthority } from 'src/app/concrats/listUserAuthority';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserauthorityService {

  constructor(private httpClientService:HttpClientService) { }

  create(userauthority: CreateUserAuthority,errorCallBack?:(errorMessage: string)=> void ){
    this.httpClientService.post({
      controller:"userauthorities"

    },userauthority).subscribe(result =>{
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

  async List(errorCallBack?: (errorMessage:string)=> void): Promise<ListUserAuthority[]>{
    const promiseData:Promise<ListUserAuthority[]> = this.httpClientService.get<ListUserAuthority[]>({
      controller:"userauthorities"
    }).toPromise();
    promiseData.then()
    .catch((errorResponse: HttpErrorResponse)=> errorCallBack(errorResponse.message))
    return await promiseData;
  }
  Delete(userauthority:UserauthorityService,id){
    this.httpClientService.delete({
      controller:"userauthorities"

    },id).subscribe(data=> {
      console.log(data),
      alert("başarılı");
    });
    
  }
  Update(userauthority:ListUserAuthority){
    this.httpClientService.put({
      controller:"userauthorities"
    },userauthority).subscribe(data => {
      alert("başarılı");
    })

  }
}
