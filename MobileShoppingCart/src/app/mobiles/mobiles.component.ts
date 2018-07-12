import { Component, OnInit } from '@angular/core';
import{MobPart} from './mob-parts';
import {MOBPART} from './mocks';


@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

	mobilePart:MobPart[];
  constructor() {}

  ngOnInit() {
  	this.mobilePart=MOBPART;
  }
  	
  // 	totalStock(){
 	// 	let sum=0;
 	// 	for(let instock of this.mobilePart)
 	// 	{
 	// 		sum = sum + instock.inStock;
 	// 	}
 	// 	return sum;	
 	// }
 	tot(){
 		let sum = 0;
 		for(let a of this.mobilePart){
 			sum += a.inStock;
 		}
 		return sum;
	}

   downQuant(dq)
     {
      // alert("down quant");
      if(dq.quantity!=0)
     {
        dq.quantity--;
     }

     }

 UpQuant(uq)
     {
      // alert("UP quant");
        if(uq.quantity<uq.inStock)
      uq.quantity++;
     console.log(uq.quantity);


     }

 }

