import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import {CreateDepartment} from '../../../concrats/createDepartment'
import { HttpErrorResponse } from '@angular/common/http';
import { ListDepartment } from 'src/app/concrats/listDepartment';
import { data, error } from 'jquery';
import { timeout } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClientService:HttpClientService) { }

  create(department: CreateDepartment,errorCallBack?:(errorMessage: string)=> void ){
    this.httpClientService.post({
      controller:"departments"

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

  async List(errorCallBack?: (errorMessage:string)=> void): Promise<ListDepartment[]>{
    const promiseData:Promise<ListDepartment[]> = this.httpClientService.get<ListDepartment[]>({
      controller:"departments"
    }).toPromise();
    promiseData.then()
    .catch((errorResponse: HttpErrorResponse)=> errorCallBack(errorResponse.message))
    return await promiseData;
  }
  Delete(department:DepartmentService,id){
    this.httpClientService.delete({
      controller:"departments"

    },id).subscribe(data=> {
      console.log(data),
      alert("başarılı");
    });
    
  }
  Update(department:ListDepartment){
    this.httpClientService.put({
      controller:"departments"
    },department).subscribe(data => {
      alert("başarılı");
    })

  }
  
}
