import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "./../../services/productos.service";

@Component({
  selector: 'app-productos-item',
  templateUrl: './productos-item.component.html',
  styleUrls: ['./productos-item.component.css']
})
export class ProductosItemComponent {

  item:any;

  constructor(private rutas:ActivatedRoute, public _bs:ProductosService) {
      
      rutas.params.subscribe( parametros => {

          let id = parametros['producto'];
          this.item = this._bs.getElemento(id);

          console.log( this.item );
      })
  }

}
