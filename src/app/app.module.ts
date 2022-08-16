import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DeleteDirective } from './directives/admin/delete.directive';
import { JwtModule } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent,
    DeleteDirective,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule, UiModule, BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>localStorage.getItem("accessToken"),
        allowedDomains:["localhost:7073"]
      }
    })
  ],
  providers: [
    {provide:"baseUrl", useValue:" https://localhost:7073/api", multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
