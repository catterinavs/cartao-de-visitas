import { SurpriseService } from './../../services/surprise/surprise.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-surprise',
  templateUrl: './surprise.component.html',
  styleUrls: ['./surprise.component.css'],
})
export class SurpriseComponent {
  constructor(private surpriseService: SurpriseService) {}

  surprise: any = this.surpriseService
    .getAll(this.surpriseService.randomNumber(1, 50))
    .then((image) => {
      this.surprise = image;
      console.log(image);
      this.surprise.loaded = true
    })
    .catch((erro) => {
      console.log(erro);
    });

    novaImagem(){
      this.surprise = this.surpriseService
      .getAll(this.surpriseService.randomNumber(1, 50))
      .then((image) => {
        this.surprise = image;
        console.log(image);
        this.surprise.loaded = true
      })
      .catch((erro) => {
        console.log(erro);
      });
    }
}
