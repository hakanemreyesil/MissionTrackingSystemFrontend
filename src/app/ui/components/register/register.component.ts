import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Create_User } from 'src/app/concrats/users/create_user';
import { User } from 'src/app/entities/user';
import { RegisterService } from 'src/app/services/common/models/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private registerService : RegisterService ) { }
  frm:FormGroup;
  ngOnInit(): void {
    this.frm= this.formBuilder.group({
      fullname: ["",[
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],
      username: ["",[
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],
      email: ["",[
        Validators.required,
        Validators.maxLength(250),
        Validators.email
      ]],
      password: ["",[
        Validators.required
      ]],
      passwordConfirm: ["",[
        Validators.required
      ]]

    },{
      validators: (group: AbstractControl): ValidationErrors | null =>{
      let password = group.get("password").value;
      let passwordConfirm = group.get("passwordConfirm").value;

      return password== passwordConfirm ? null:{notSame:true};
    }
  })
  }
  get component(){
    return this.frm.controls;
  }
  submitted:boolean=false;
  async onSubmit(user:User){
    this.submitted=true;
 
    
    if(this.frm.invalid)
    return;
   const result:Create_User = await this.registerService.create(user);
   if(result.succeeded)
   alert(result.message)

    else
    alert(result.message)

  }

}
