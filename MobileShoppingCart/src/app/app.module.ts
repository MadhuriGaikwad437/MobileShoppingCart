import {NgModule} from '@angular/core';
import{FirstComponent} from './app.component';
import{BrowserModule} from '@angular/platform-browser';
import { MobilesComponent } from './mobiles/mobiles.component';
import {FormsModule} from '@angular/forms';

@NgModule({
	declarations:[FirstComponent, MobilesComponent],
	imports:[BrowserModule,FormsModule],
	bootstrap:[FirstComponent]
})
export class FirstModule{

}