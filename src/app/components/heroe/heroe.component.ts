import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(private activedRoute: ActivatedRoute,
              private hereoesService: HeroesService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe( resp =>{
      this.heroe = this.hereoesService.getHeroe( resp['id'] );
    });

    console.log(this.heroe);
  }

}
