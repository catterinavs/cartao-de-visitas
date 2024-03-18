import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  mode: boolean = false;

  //False = dark
  //True = light

  constructor() { }

  getMode(){
    return this.mode;
  }
  changeMode(){
    this.mode = !this.mode;
  }
}
