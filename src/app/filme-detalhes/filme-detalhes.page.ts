import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IFilme } from './../model/ifilmes';


@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.page.html',
  styleUrls: ['./filme-detalhes.page.scss'],
})
export class FilmeDetalhesPage implements OnInit {
  filme: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=> {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state){
        this.filme = getNav.extras.state.paramFilme;
      }
    });
  }

}
