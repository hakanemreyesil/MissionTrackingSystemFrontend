import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateAuthority } from 'src/app/concrats/createAuthority';
import { ListAuthority } from 'src/app/concrats/listAuthority';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService {

  constructor(private httpClientService:HttpClientService) { }

  create(mission: CreateAuthority,errorCallBack?:(errorMessage: string)=> void ){
    this.httpClientService.post({
      controller:"authorities"

    },mission).subscribe(result =>{
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

  async List(errorCallBack?: (errorMessage:string)=> void): Promise<ListAuthority[]>{
    const promiseData:Promise<ListAuthority[]> = this.httpClientService.get<ListAuthority[]>({
      controller:"authorities"
    }).toPromise();
    promiseData.then()
    .catch((errorResponse: HttpErrorResponse)=> errorCallBack(errorResponse.message))
    return await promiseData;
  }
  Delete(mission:AuthorityService,id){
    this.httpClientService.delete({
      controller:"authorities"

    },id).subscribe(data=> {
      console.log(data),
      alert("başarılı");
    });
    
  }
  Update(authority:ListAuthority){
    this.httpClientService.put({
      controller:"authorities"
    },authority).subscribe(data => {
      alert("başarılı");
    })
}
}