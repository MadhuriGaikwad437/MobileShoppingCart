import { MOBPART } from './mocks';
import { Injectable } from '@angular/core';

@Injectable()

export class MobDataService{
	getParts(){
		return MOBPART;

	}
}