import { Component, ElementRef, ViewChild} from '@angular/core';
import { GiftService } from '../../services/gift.service';


@Component({
    selector: 'gift-search-box',
    template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gift..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
    `
})

export class SearchBoxComponent{

    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;

    constructor( private giftService: GiftService ){}

    searchTag(){
        const newTag = this.tagInput.nativeElement.value;

        this.giftService.searchTag(newTag);

        this.tagInput.nativeElement.value = '';

    }
}