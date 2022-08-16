import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionsModule } from './missions/missions.module';
import { UsermissionsModule } from './usermissions/usermissions.module';
import { HomeModule } from './home/home.module';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
          
  ],
  imports: [
    CommonModule,
    MissionsModule,
    UsermissionsModule,
    HomeModule,
    RegisterModule,
    LoginModule
  
  ]
})
export class ComponentsModule { }
