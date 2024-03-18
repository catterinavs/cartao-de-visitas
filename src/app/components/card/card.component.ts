import { card } from 'src/app/interfaces/card';
import { CardService } from './../../services/card/card.service';
import { Component } from '@angular/core';
import { slideInAnimation } from 'src/assets/animations/animations';
import { ModeService } from 'src/app/services/mode/mode.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [slideInAnimation]
})
export class CardComponent {
 constructor(private cardService: CardService, private modeService: ModeService){}

  cards: card[] = this.cardService.getCards();


}
