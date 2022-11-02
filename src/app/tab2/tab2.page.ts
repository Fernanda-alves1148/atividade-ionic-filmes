/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { ISerie } from '../model/iseries';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router) {}

  listaSerie: ISerie[] = [
    {
      nome: 'Lupin',
      lancamento: '08/01/2021',
      duracao: '10 eps',
      temporadas: 1,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sgxawbFB5Vi5OkPWQLNfl3dvkNJ.jpg',
      generos: ['Crime', 'Drama', 'Mistério'],
      pagina: '/lupin',
      favorito: false
    },
    {
      nome: 'Loki',
      lancamento: '09/06/2021',
      duracao: '6 eps',
      temporadas: 1,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ukR0MkCQE6IylzBPd61txJi1L3E.jpg',
      generos: ['Fantasia', 'Drama', 'Ficção científica'],
      pagina: '/loki',
      favorito: false
    },
    {
      nome: 'South Park',
      lancamento: '13/08/1997',
      duracao: '317 eps',
      temporadas: 25,
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iiCY2QIGSnmtVkIdjkKAfwDs0KF.jpg',
      generos: ['Animação', 'Comédia'],
      pagina: '/southpark',
      favorito: false
    },
    {
      nome: 'Darker Than Black',
      lancamento: '06/04/2007',
      duracao: '24 eps',
      temporadas: 2,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/34afXj0quZcmFmRhoH4BT82uVIT.jpg',
      generos: ['Animação', 'Ação', 'Aventura'],
      pagina: '/darker',
      favorito: false
    },
    {
      nome: 'What if...?',
      lancamento: '11/08/2021',
      duracao: '9 eps',
      temporadas: 1,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg',
      generos: ['Animação', 'Ação', 'Aventura'],
      pagina: '/whatif',
      favorito: false
    }
  ];
  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras);
}
}
