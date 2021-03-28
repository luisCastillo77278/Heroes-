import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
  styles: [
  ]
})
export class BuscarHeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;
  constructor(private _heroesService: HeroesService,
              private activedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(resp =>{
      this.termino = resp['termino'];
      this.heroes = this._heroesService.filtradoHeroes(resp['termino']);
    });
    console.log(this.heroes);
  }

  verHeroe( idx: number ){
    this.router.navigate(['/heroe', idx ]);
  }

}
