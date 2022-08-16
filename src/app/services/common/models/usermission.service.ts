import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserMission } from 'src/app/concrats/createUserMission';
import { ListUserMission } from 'src/app/concrats/listUserMission';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UsermissionService {

  constructor(private httpClientService:HttpClientService) { }

  create(usermission: CreateUserMission,errorCallBack?:(errorMessage: string)=> void ){
    this.httpClientService.post({
      controller:"usermissions"

    },usermission).subscribe(result =>{
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

  async List(errorCallBack?: (errorMessage:string)=> void): Promise<ListUserMission[]>{
    const promiseData:Promise<ListUserMission[]> = this.httpClientService.get<ListUserMission[]>({
      controller:"usermissions"
    }).toPromise();
    promiseData.then()
    .catch((errorResponse: HttpErrorResponse)=> errorCallBack(errorResponse.message))
    return await promiseData;
  }
  Delete(usermission:UsermissionService,id){
    this.httpClientService.delete({
      controller:"usermissions"

    },id).subscribe(data=> {
      console.log(data),
      alert("başarılı");
    });
    
  }
  
  Update(usermission:ListUserMission){
    this.httpClientService.put({
      controller:"usermissions"
    },usermission).subscribe(data => {
      alert("başarılı");
    })

  }

  }
