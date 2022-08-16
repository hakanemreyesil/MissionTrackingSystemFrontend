import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { AuthGuard } from './guards/common/auth.guard';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {path:"admin", component:LayoutComponent,children:[
    {path:"", component:DashboardComponent  },
    {path:"authorities", loadChildren:() => import("./admin/components/authorities/authorities.module").then(module=> module.AuthoritiesModule), canActivate:[AuthGuard]},
    {path:"dashboards", loadChildren:() => import("./admin/components/dashboard/dashboard.module").then(module=> module.DashboardModule), canActivate:[AuthGuard]},
    {path:"departments", loadChildren:() => import("./admin/components/departments/departments.module").then(module=> module.DepartmentsModule), canActivate:[AuthGuard]},
    {path:"missions", loadChildren:() => import("./admin/components/missions/missions.module").then(module=> module.MissionsModule), canActivate:[AuthGuard]},
    {path:"userauthorities", loadChildren:() => import("./admin/components/userauthorities/userauthorities.module").then(module=> module.UserauthoritiesModule), canActivate:[AuthGuard]},
    {path:"usermissions", loadChildren:() => import("./admin/components/usermissions/usermissions.module").then(module=> module.UsermissionsModule), canActivate:[AuthGuard]},
    {path:"users", loadChildren:() => import("./admin/components/users/users.module").then(module=> module.UsersModule), canActivate:[AuthGuard]},
    
  ], canActivate:[AuthGuard]
  },
  {path: "", component : HomeComponent},
  {path:"missions", loadChildren : ()=> import("./ui/components/missions/missions.module").then(module => module.MissionsModule), canActivate:[AuthGuard]},
  {path:"usermissions", loadChildren : ()=> import("./ui/components/usermissions/usermissions.module").then(module => module.UsermissionsModule), canActivate:[AuthGuard]},
  {path:"register", loadChildren : ()=> import("./ui/components/register/register.module").then(module => module.RegisterModule)},
  {path:"login", loadChildren : ()=> import("./ui/components/login/login.module").then(module => module.LoginModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
