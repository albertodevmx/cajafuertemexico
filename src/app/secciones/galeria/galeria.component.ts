import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {


galeria:any = [
  { "miniatura" : "electrica.jpg" },
  { "miniatura" : "alta_01.jpg" },
  { "miniatura" : "alta_02.jpg" },
  { "miniatura" : "alta_03.jpg" },
  { "miniatura" : "alta_04.jpg" },
  { "miniatura" : "alta_05.jpg" },
  { "miniatura" : "alta_06.jpg" },
  { "miniatura" : "alta_07.jpg" },
  { "miniatura" : "alta_08.jpg" },
  { "miniatura" : "alta_09.jpg" },
  { "miniatura" : "alta_10.jpg" },
  { "miniatura" : "alta_11.jpg" },
  { "miniatura" : "alta_12.jpg" },
  { "miniatura" : "alta_13.jpg" },
  { "miniatura" : "alta_14.jpg" },
  { "miniatura" : "alta_15.jpg" },
  { "miniatura" : "alta_16.jpg" },
  { "miniatura" : "alta_17.jpg" },
  { "miniatura" : "alta_18.jpg" },
  { "miniatura" : "alta_19.jpg" },
  { "miniatura" : "alta_20.jpg" },
  { "miniatura" : "alta_21.jpg" },
  { "miniatura" : "alta_22.jpg" },
  { "miniatura" : "alta_23.jpg" },
  { "miniatura" : "alta_24.jpg" },
  { "miniatura" : "alta_25.jpg" },
  { "miniatura" : "alta_26.jpg" },
  { "miniatura" : "alta_27.jpg" }
];


  constructor() { }

  ngOnInit() {
  }

}
