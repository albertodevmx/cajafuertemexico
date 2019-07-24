import { Injectable } from '@angular/core';
import { HttpModule, Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:any[];
  item:any;

  constructor(private miHttp:Http) {
    this.cargarProductos();
  }

  public cargarProductos() {

      this.miHttp.get('assets/data/productos.json').subscribe( res => {
          this.productos = res.json();
      })

  }

  public getElemento(id){
    this.productos.forEach( item => {
      
      if( id == item.id) {
          this.item = item;
      }
      
    })

    return this.item;
  }

}
