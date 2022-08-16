import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './departments.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ListComponent } from './list/list.component';

import { UpdateComponent } from './update/update.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    DepartmentsComponent,
    CreateComponent,
    ListComponent, UpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : "", component: DepartmentsComponent }
    ]),
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,MatTableModule,MatPaginatorModule,MatDialogModule
  ]
})
export class DepartmentsModule { }
