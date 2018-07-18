import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import{BrowserModule} from '@angular/platform-browser';
import { MobilesComponent } from './mobiles/mobiles.component';
//import {FormsModule} from '@angular/forms';
import { LaptopComponent } from './laptop/laptop.component';
import { TelevisionComponent } from './television/television.component';
import { RouterModule,Routes} from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';


const appRoutes:Routes=[
{ path:'Laptops', component:LaptopComponent},
{ path:'Televisions', component:TelevisionComponent},
{ path:'Mobiles', component:MobilesComponent},

{ path:'Home', component:HomeComponent},
{ path:'', component:HomeComponent},
{ path:'**', component:ErrorPageComponent}
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes)
  ],
 // declarations: []
 exports : [RouterModule]
})
export class AppRoutingModule { }
