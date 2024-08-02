import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gift.interfaces';

@Component({
  selector: 'gift-card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];

}
