import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gift.interfaces';

@Injectable({
    providedIn: 'root'
})

export class GiftService {

    public gifList: Gif[]= [];

    private _tagsHistory: string[] = [];

    private apiKey: string = 'sdj45vi2rnva03DswvlmZ8SYFIS3Lkbe';

    private apiUrl: string = 'https://api.giphy.com/v1/gifs';

    constructor( private http: HttpClient){
        this.loadLocalStorage();
    }

    get tagsHistoryMethod(){
        //operador spreed para crear copia de los valores de _tagHistory
        return [...this._tagsHistory];
    }

    private organizeHistory(tag: string){
        //grabamos en nuestro ARREGLO todo en minimo por javascript que es caseSensitive
        tag = tag.toLowerCase();

        if( this._tagsHistory.includes(tag) ){
            //oldTag(tag q ya esta) debe ser diferente al tag que estoy ingresando generando un nuevo array sin los tag repetidos.
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
            }
            //insertar al inicio de mi arreglo
            this._tagsHistory.unshift( tag );
            //corto de la posicion 0 al 10 para que no supere esa cantidad de tags
            this._tagsHistory = this.tagsHistoryMethod.splice(0,10);

            this.saveLocalStorage();
    }

    //LocalStorage

    private saveLocalStorage():void{
        localStorage.setItem('history', JSON.stringify( this._tagsHistory ));
    }

    private loadLocalStorage():void {
        if( !localStorage.getItem('history') ) return;

        this._tagsHistory = JSON.parse( localStorage.getItem('history')! );

        if( this._tagsHistory.length === 0) return;

        this.searchTag( this._tagsHistory[0] );

    }


    searchTag( tag: string): void{

        if(tag.length === 0) return;
        this.organizeHistory( tag );

        const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', tag)

        this.http.get<SearchResponse>(`${ this.apiUrl  }/search`, { params })
        .subscribe( resp => {
            this.gifList = resp.data;

            console.log({gifs: this.gifList})
        });
    }
    
}