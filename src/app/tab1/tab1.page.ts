/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IFilme } from '../model/ifilmes';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
  nome: 'Madagascar',
  lancamento: '24/06/2005',
  duracao: '1h26min',
  classificacao: 8,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7aoLcwd4nQVGbG7L4vqu0d929JD.jpg',
  generos: ['Animação', 'Aventura', 'Comédia'],
  pagina: '/madagascar',
  favorito: false
  },
  {
    nome: 'Matrix',
    lancamento: '30/03/1999',
    duracao: '2h16min',
    classificacao: 8,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lDqMDI3xpbB9UQRyeXfei0MXhqb.jpg',
    generos: ['Ação', 'Ficção científica'],
    pagina: '/matrix',
    favorito: false
    },
  {
    nome: 'Moonfall',
    lancamento: '03/02/2022',
    duracao: '2h2min',
    classificacao: 6,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg',
    generos: ['Ação', 'Aventura', 'Ficção científica'],
    pagina: '/moonfall',
    favorito: false
    },
  {
    nome: 'Persona 3 The Movie #4: Winter of Rebirth',
    lancamento: '23/01/2016',
    duracao: '1h45min',
    classificacao: 7,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oskx42TdVIzi8ptArAaTjee2vTj.jpg',
    generos: ['Animação', 'Ação', 'Fantasia'],
    pagina: '/persona',
    favorito: false
    },
  {
    nome: 'Tron: O Legado',
    lancamento: '17/12/2010',
    duracao: '2h6min',
    classificacao: 6,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wlHzvzXE9AvMgrVsKHg2PweC3aC.jpg',
    generos: ['Ação', 'Aventura', 'Ficção científica'],
    pagina: '/tronleg',
    favorito: false
    }
  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhes'], navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme){
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja favoritar esse filme?',
      buttons: [
        {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          filme.favorito=false;
        }
      },{
        text: 'Sim',
        handler: () => {
          filme.favorito=true;
          this.apresentarToast();
        }
      }
    ]
    });
    await alert.present();
  }

  async apresentarToast(){
    const toast = await this.toastController.create({
      message: 'Filme adiconado aos favoritos!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
