import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { surprise } from 'src/app/interfaces/surprise';

@Injectable({
  providedIn: 'root',
})
export class SurpriseService {

  image: surprise = {
    id: 0,
    src: '',
    frase: ''
  };

  constructor(private db: AngularFireDatabase) {}

  getAll(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
     this.db.list<surprise>('images')
     .snapshotChanges()
     .subscribe((imagesSnapshot) => {
      imagesSnapshot.forEach((image) => {
        const aux = image.payload.val();
        if (id == aux?.id){
          this.image.id = aux.id;
          this.image.src = aux.src;
          this.image.frase = aux.frase;

          resolve(image.payload.exportVal());
        }
      });
      reject("imagem não encontrada em nosso banco")
     });
    });
  }

  randomNumber(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;;
  }
}
