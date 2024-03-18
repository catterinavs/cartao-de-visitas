import { Injectable } from '@angular/core';
import { card } from '../../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  cards: card[] = [

    {
      icon: "fa fa-envelope icon",
      link: "/email",
      linkText: "Envie um E-mail!",
      color: "black",
      type: "router"
    },
    {
      icon: "fa fa-whatsapp icon",
      link: "https://wa.me/5528999596505?text=Olá!",
      linkText: "Mande uma mensagem!",
      color: "black",
      type: "link"
    },
    {
      icon: "fa fa-instagram icon",
      link: "https://www.instagram.com/catterinasalvador/",
      linkText: "Venha ver meus gatinhos!",
      color: "black",
      type: "link"
    },
    {
      icon: "fa fa-linkedin icon",
      link: "https://www.linkedin.com/in/catterina-salvador-2708035b/",
      linkText: "Ainda não mexi!",
      color: "black",
      type: "link"
    },
    {
      icon: "fa fa-github icon",
      link: "https://www.github.com/catterinavs",
      linkText: "Nem aqui!",
      color: "black",
      type: "link"
    },
    {
      icon: "fa fa-paw icon",
      link: "/surprise",
      linkText: "???",
      color: "black",
      type: "router"
    }


  ];

  getCards(){
    return this.cards;
  }

}
