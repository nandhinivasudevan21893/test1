import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeemployeeComponent } from './employees/homeemployee.component';
import { ListemployeesComponent } from './employees/listemployees/listemployees.component';
import { CreateemployeeComponent } from './employees/createemployee/createemployee.component';


// const AppRoutingModule: Routes =[
//   {path:'list', component: ListemployeesComponent},
//   {path:'create', component: CreateemployeesComponent},
//   {path:'', redirectTo: '/list', pathMatch: 'full'},
// ];
@NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreateemployeeComponent,
    HomeemployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
