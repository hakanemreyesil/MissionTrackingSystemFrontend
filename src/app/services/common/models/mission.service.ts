import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMission } from 'src/app/concrats/createMission';
import { ListMission } from 'src/app/concrats/listMission';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private httpClientService:HttpClientService) { }
  create(mission: CreateMission,errorCallBack?:(errorMessage: string)=> void ){
    this.httpClientService.post({
      controller:"missions"

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
  async List(errorCallBack?: (errorMessage:string)=> void,): Promise<ListMission[]>{
    // const headers = new HttpHeaders({
    //   "Authorization": `bearer ${localStorage.getItem("accessToken")} ` 
    // })
    const promiseData:Promise<ListMission[]> = this.httpClientService.get<ListMission[]>({
      controller:"missions",
      //headers:headers
    }).toPromise();
    promiseData.then()
    .catch((errorResponse: HttpErrorResponse)=> errorCallBack(errorResponse.message))
    return await promiseData;
  }
  Delete(mission:MissionService,id){
    this.httpClientService.delete({
      controller:"missions"

    },id).subscribe(data=> {
      console.log(data),
      alert("başarılı");
    });
    
  }
  Update(mission:ListMission){
    this.httpClientService.put({
      controller:"missions"
    },mission).subscribe(data => {
      alert("başarılı");
    })

  }
}
