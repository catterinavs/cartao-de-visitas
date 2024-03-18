import { ModeService } from './../../services/mode/mode.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  mode: boolean = this.modeService.getMode();

  constructor(private modeService: ModeService){}

  changeMode(){
    this.modeService.changeMode()
    this.mode = this.modeService.getMode();
  }


}
