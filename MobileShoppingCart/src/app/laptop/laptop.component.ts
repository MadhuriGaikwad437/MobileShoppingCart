import { Component, OnInit } from '@angular/core';
import {LapiParts} from './Lapi-parts';
import {LapiDatabase} from './mocks';

@Component({
  //selector: 'app-laptop',
  selector: 'app-root',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor() { }
  lapiImage:String='assets/image/lenovo.jpg';
  laptops:LapiParts[];
  ngOnInit() {

  	this.laptops=LapiDatabase;
  }

}

