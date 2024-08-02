import { Component } from '@angular/core';
import { GiftService } from '../../services/gift.service';
import { Gif } from '../../interfaces/gift.interfaces';

@Component({
  selector: 'gift-home-page',
  templateUrl: './home-page.component.html'
})

export class HomePageComponent {
  constructor( private giftService: GiftService){}

  get gifs(): Gif[]{
    return this.giftService.gifList;
  }
}
