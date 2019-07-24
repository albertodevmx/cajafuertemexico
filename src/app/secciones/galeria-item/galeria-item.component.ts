import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-galeria-item',
  templateUrl: './galeria-item.component.html',
  styleUrls: ['./galeria-item.component.css']
})
export class GaleriaItemComponent implements OnInit {
  
  foto:string;

  constructor(private rutas:ActivatedRoute) {
        rutas.params.subscribe( parametros => {
      
            console.log( parametros['foto'] ) ;

            this.foto = parametros['foto'];
    
        })
  }

  ngOnInit() {
  }

}
