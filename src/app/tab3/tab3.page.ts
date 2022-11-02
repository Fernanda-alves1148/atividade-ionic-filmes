/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IAtor } from '../model/iatores';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router) {}

  listaAtores: IAtor[] = [
  {
    nome: 'Matthew Wood',
    nascimento: '15/08/1972',
    classificacao: 5,
    foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u1UjHLTeS5Dregg85A3GICf7Nkf.jpg',
    pagina: '/matthewwood',
    favorito: false
  },
  {
    nome: 'Jeff Bridges',
    nascimento: '04/12/1949',
    classificacao: 7,
    foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xms1RAY6q7Lzp7wNeRCB0kzhucn.jpg',
    pagina: '/jeffbridges',
    favorito: false
  },
  {
    nome: 'Keanu Reeves',
    nascimento: '02/09/1964',
    classificacao: 8,
    foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg',
    pagina: '/keanureeves',
    favorito: false
  },
  {
    nome: 'Emma Watson',
    nascimento: '15/04/1990',
    classificacao: 8,
    foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tvPPRGzAzdQFhlKzLbMO1EpuTJI.jpg',
    pagina: '/emmawatson',
    favorito: false
  },
  {
    nome: 'Elizabeth Olsen',
    nascimento: '16/02/1989',
    classificacao: 8,
    foto: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7Gr7Gpwvn05pnsawfNAlob1PAK3.jpg',
    pagina: '/lizaolsen',
    favorito: false
  }
  ];
  exibirAtor(ator: IAtor){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhes'], navigationExtras);
  }

}
