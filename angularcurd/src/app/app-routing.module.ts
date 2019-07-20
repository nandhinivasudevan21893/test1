import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateemployeeComponent } from './employees/createemployee/createemployee.component';
import { ListemployeesComponent } from './employees/listemployees/listemployees.component';
import { HomeemployeeComponent } from './employees/homeemployee.component';
// import { HomeemployeeComponent } from './employees/Homeemployee/Homeemployee.component';

const routes: Routes = [
  { path : "" , component:HomeemployeeComponent},
  { path : "list", component:ListemployeesComponent},
  { path : "create" , component:CreateemployeeComponent},
  { path :'', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
