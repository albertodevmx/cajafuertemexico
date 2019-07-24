import { Component, OnInit } from '@angular/core';
import { ProductosService } from "./../../services/productos.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  productos:any;

  constructor(public _prod:ProductosService) {
    console.log( _prod.productos );
  }

  ngOnInit() {
  }

}
