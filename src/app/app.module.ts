import {NgModule} from '@angular/core';
import{FirstComponent} from './app.component';
import{BrowserModule} from '@angular/platform-browser';
import { MobilesComponent } from './mobiles/mobiles.component';

@NgModule({
	declarations:[FirstComponent, MobilesComponent],
	imports:[BrowserModule],
	bootstrap:[FirstComponent]
})
export class FirstModule{

}