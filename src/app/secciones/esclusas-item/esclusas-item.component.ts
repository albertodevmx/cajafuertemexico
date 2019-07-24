import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EsclusasService } from "./../../services/esclusas.service";

@Component({
  selector: 'app-esclusas-item',
  templateUrl: './esclusas-item.component.html',
  styleUrls: ['./esclusas-item.component.css']
})
export class EsclusasItemComponent {

  item:any;

  constructor(private rutas:ActivatedRoute, public _bs:EsclusasService) {
      
      rutas.params.subscribe( parametros => {

          let id = parametros['producto'];
          this.item = this._bs.getElemento(id);

          console.log( this.item );
      })
  }

}
