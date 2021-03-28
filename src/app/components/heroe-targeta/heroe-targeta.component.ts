import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styles: [
  ]
})
export class HeroeTargetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log('activo');
    this.router.navigate(['/heroe', this.index ]);

    // this.heroeSeleccionado.emit( this.index );
  }
}
