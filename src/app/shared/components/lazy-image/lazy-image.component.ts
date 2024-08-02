import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})

export class LazyImageComponent implements OnInit{
  
  @Input()
  //uso el ! porque siempre voy a recibir una url si puedo recibir o no usaria ?
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if( !this.url ) throw new Error('URL property is required');
  }
  
  onLoad():void {
    setTimeout(()=> {
      this.hasLoaded = true;
    }, 1000)
  }
}
