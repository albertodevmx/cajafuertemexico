import { Component, OnInit } from '@angular/core';
import { EsclusasService } from "./../../services/esclusas.service";

@Component({
  selector: 'app-esclusas',
  templateUrl: './esclusas.component.html',
  styleUrls: ['./esclusas.component.css']
})
export class EsclusasComponent implements OnInit {

  productos:any;

  constructor(public _prod:EsclusasService) {
    console.log( _prod.productos );
  }

  ngOnInit() {
  }

}
