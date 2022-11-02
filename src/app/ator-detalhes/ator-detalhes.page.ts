import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IAtor } from './../model/iatores';

@Component({
  selector: 'app-ator-detalhes',
  templateUrl: './ator-detalhes.page.html',
  styleUrls: ['./ator-detalhes.page.scss'],
})
export class AtorDetalhesPage implements OnInit {
  ator: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=> {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state){
        this.ator = getNav.extras.state.paramAtor;
      }
    });
  }

}
