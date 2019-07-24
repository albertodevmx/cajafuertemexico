import { Component, OnInit } from '@angular/core';
import { AltaService } from "./../../services/alta.service";

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  productos:any;

  constructor(public _prod:AltaService) {
    console.log( _prod.productos );
  }

  ngOnInit() {
  }

}
