import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AltaService } from "./../../services/alta.service";

@Component({
  selector: 'app-alta-item',
  templateUrl: './alta-item.component.html',
  styleUrls: ['./alta-item.component.css']
})
export class AltaItemComponent {

  item:any;

  constructor(private rutas:ActivatedRoute, public _bs:AltaService) {
      
      rutas.params.subscribe( parametros => {

          let id = parametros['producto'];
          this.item = this._bs.getElemento(id);

          console.log( this.item );
      })
  }

}
