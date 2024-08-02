import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gift.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html'
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gifs!: Gif;

  //le doy un error si no encuentra nada con ngOnInit puedo trabajar en el ciclo de vida del componente ya iniciado
  ngOnInit(): void {
    if( !this.gifs ) throw new Error('Gif property is required');
  }
}
