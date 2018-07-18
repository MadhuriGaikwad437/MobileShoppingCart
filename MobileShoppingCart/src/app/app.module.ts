import {NgModule} from '@angular/core';
import{FirstComponent} from './app.component';
import{BrowserModule} from '@angular/platform-browser';
import { MobilesComponent } from './mobiles/mobiles.component';
import {FormsModule} from '@angular/forms';
import { LaptopComponent } from './laptop/laptop.component';
import { TelevisionComponent } from './television/television.component';
import { RouterModule,Routes} from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { MobDataService } from './mobiles/mob-data.service';

@NgModule({
	declarations:[FirstComponent, MobilesComponent, LaptopComponent, TelevisionComponent, ErrorPageComponent, HomeComponent],
	imports:[BrowserModule,FormsModule, AppRoutingModule],
	bootstrap:[FirstComponent],
	providers:[MobDataService]
})
export class FirstModule{

}