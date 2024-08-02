import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { GiftService } from '../../../gift/services/gift.service';
import { Gif } from '../../../gift/interfaces/gift.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl:'./sidebar.component.css'
})

export class SidebarComponent { 

  constructor(private giftService: GiftService){}

  get tags(): string[]{
    return this.giftService.tagsHistoryMethod;
  }

  searchTag( tag: string ):void{
    this.giftService.searchTag( tag );
  }

}
