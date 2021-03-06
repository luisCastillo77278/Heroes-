import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[]=[];

  constructor(private _heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( idx: number ){
    this.router.navigate(['/heroe', idx ]);
  }

}
