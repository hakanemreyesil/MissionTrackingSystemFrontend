import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { MissionsModule } from './missions/missions.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthoritiesModule } from './authorities/authorities.module';
import { DepartmentsModule } from './departments/departments.module';
import { UserauthoritiesModule } from './userauthorities/userauthorities.module';
import { UsermissionsModule } from './usermissions/usermissions.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersModule,
    MissionsModule,
    DashboardModule,
    AuthoritiesModule,
    DepartmentsModule,
    UserauthoritiesModule,
    UsermissionsModule
  ]
})
export class ComponentsModule { }
